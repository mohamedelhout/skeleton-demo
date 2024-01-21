import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductDto } from '../../../../services/products/dtos/get-products-dto';
import { UpdateProductRequest } from '../../../../services/products/dtos/update-product-dto-';
import { ProductsService } from '../../../../services/products/products.service';
import { NgForm } from '@angular/forms';
import { Logger } from '../../../../core/services/common/logger.service';

const log = new Logger('app-update-product-modal');

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrl: './update-product-modal.component.css',
})
export class UpdateProductModalComponent implements OnInit {
  //Inputs
  product!: ProductDto;
  onUpdateDoneCallback!: Function;
  //

  editRequest!: UpdateProductRequest;

  categories!: string[];

  minimumPrice: number = 1;

  constructor(
    private modalRef: BsModalRef,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.initEditRequest();
  }

  initEditRequest() {
    this.editRequest = {
      ...this.product,
    };
  }

  closeModal() {
    this.modalRef.hide();
  }

  getCategories() {
    this.productsService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  private isFormValid(form: NgForm): boolean {
    for (let control in form.form.controls) {
      form.form.get(control)?.markAsTouched();
    }

    return form?.valid ?? false;
  }

  editProduct(form: NgForm) {
    if (!this.isFormValid(form)) {
      return;
    }

    const errorCallback = (error: any) => {
      log.error(error);
    };

    this.productsService.update(this.editRequest).subscribe(
      (res) => {
        if (!res || !res.id) {
          errorCallback(res);
          return;
        }

        this.onUpdateDoneCallback &&
          this.onUpdateDoneCallback(this.editRequest);

        this.closeModal();
      },
      (error) => errorCallback(error)
    );
  }
}
