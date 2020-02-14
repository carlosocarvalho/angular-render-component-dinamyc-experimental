import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeModuleRouting } from './home.module.routing';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DemandRegistryModule } from '../demand-registry/demand-registry.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeModuleRouting,
    DashboardModule,
    DemandRegistryModule
  ]
})
export class HomeModule { }
