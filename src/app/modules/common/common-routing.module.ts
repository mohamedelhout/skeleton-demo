import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticationGuard } from '../../core/authentication/authentication.guard';
import { Shell } from '../../shell/shell.service';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  // },
  Shell.childRoutes([
    {
      path: '',
      component: DashboardComponent,
      // canActivate: [AuthenticationGuard],
      data: { title: 'Dashboard' },
    },
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppCommonRoutingModule {}
