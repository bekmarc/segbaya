import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutAdminModule } from './layout-admin/layout-admin.module';


@NgModule({
  declarations: [
    AdminComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutAdminModule
  ]
})
export class AdminModule { }
