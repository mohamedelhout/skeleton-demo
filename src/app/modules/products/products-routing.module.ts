import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../../core/authentication/authentication.guard';
import { Shell } from '../../shell/shell.service';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'products',
      component: ProductsListComponent,
      // canActivate: [AuthenticationGuard],
      data: { title: 'Products' },
    },
    {
      path: 'products/create',
      component: CreateProductComponent,
      // canActivate: [AuthenticationGuard],
      data: { title: 'Create Product' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProductsRoutingModule {}
