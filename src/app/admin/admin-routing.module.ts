import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SidebarAdminComponent } from './layout-admin/sidebar-admin/sidebar-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
     
      {
        path: '',
        component: ViewAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
