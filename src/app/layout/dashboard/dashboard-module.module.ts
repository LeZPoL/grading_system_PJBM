import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule
  ]
})
export class DashboardModuleModule { }
