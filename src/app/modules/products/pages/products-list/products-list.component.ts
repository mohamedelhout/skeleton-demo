import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products/products.service';
import { ProductDto } from '../../../../services/products/dtos/get-products-dto';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UpdateProductModalComponent } from '../../modals/update-product-modal/update-product-modal.component';
import { ProductsDataService } from '../../services/products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products?: ProductDto[];

  constructor(
    private productsService: ProductsService,
    private modalService: BsModalService,
    private productsDataService: ProductsDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((res) => {
      this.products = res;

      this.onSuccessfullyLoadProducts();
    });
  }

  onSuccessfullyLoadProducts() {
    const newAddedProduct = this.productsDataService.getNewCreatedProduct();

    if (!newAddedProduct) {
      return;
    }

    this.products?.push(newAddedProduct);
    this.productsDataService.reset();
  }

  goToCreate() {
    this.router.navigateByUrl('/products/create');
  }

  onUpdateProduct(product: ProductDto, index: number) {
    this.modalService.show(UpdateProductModalComponent, {
      initialState: {
        product: product,
        onUpdateDoneCallback: (updatedValue: ProductDto) => {
          this.products && (this.products[index] = { ...updatedValue });
        },
      },
    });
  }

  onDeleteProduct(productIndex: number) {
    this.products?.splice(productIndex, 1);
  }
}
