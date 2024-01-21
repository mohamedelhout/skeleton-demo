import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductsService } from '../../../../services/products/products.service';
import { CreateProductRequest } from '../../../../services/products/dtos/create-product-dto';
import { Router } from '@angular/router';
import { Logger } from '../../../../core/services/common/logger.service';
import { ProductsDataService } from '../../services/products-data.service';

const log = new Logger('app-create-product');

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent implements OnInit {
  createForm!: FormGroup;

  categories!: string[];

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private productsDataService: ProductsDataService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getCategories();
  }

  initForm() {
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [100, [Validators.required, Validators.min(1)]],
      category: ['', [Validators.required]],
      description: [null],
    });
  }

  getCategories() {
    this.productsService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  //form Inputs
  get titleInp(): AbstractControl {
    return this.createForm?.controls['title'];
  }

  get priceInp(): AbstractControl {
    return this.createForm?.controls['price'];
  }

  get categoryInp(): AbstractControl {
    return this.createForm?.controls['category'];
  }

  get descriptionInp(): AbstractControl {
    return this.createForm?.controls['description'];
  }
  //

  onCreateProduct() {
    if (!this.createForm.valid) {
      return;
    }

    const request: CreateProductRequest = {
      ...this.createForm.value,
    };

    const errorCallback = (error: any) => {
      log.error(error);
    };

    this.productsService.create(request).subscribe((response) => {
      if (!response || !response.id) {
        errorCallback(response);
        return;
      }

      this.productsDataService.setNewCreatedProduct(response);

      this.router.navigateByUrl('/products');
    });
  }
}
