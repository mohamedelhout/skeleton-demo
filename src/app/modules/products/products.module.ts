import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { UpdateProductModalComponent } from './modals/update-product-modal/update-product-modal.component';
import { ViewProductModalComponent } from './modals/view-product-modal/view-product-modal.component';

@NgModule({
  declarations: [ProductsListComponent, CreateProductComponent, UpdateProductModalComponent, ViewProductModalComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
