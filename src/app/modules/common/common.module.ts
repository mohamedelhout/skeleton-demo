import { NgModule } from '@angular/core';
import { AppCommonRoutingModule } from './common-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, SharedModule, AppCommonRoutingModule],

  declarations: [DashboardComponent],
})
export class AppCommonModule {}
