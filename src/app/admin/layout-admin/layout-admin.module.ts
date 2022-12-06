import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { ElementSidebarComponent } from './sidebar-admin/element-sidebar/element-sidebar.component';



@NgModule({
  declarations: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    ElementSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderAdminComponent,
    SidebarAdminComponent
  ]
})
export class LayoutAdminModule { }
