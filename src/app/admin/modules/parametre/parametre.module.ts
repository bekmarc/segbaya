import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametreRoutingModule } from './parametre-routing.module';
import { ParametreComponent } from './parametre.component';
import { ViewAdminComponent } from '../../view-admin/view-admin.component';
import { LayoutAdminModule } from "../../layout-admin/layout-admin.module";


@NgModule({
    declarations: [
        ParametreComponent,
        ViewAdminComponent
    ],
    imports: [
        CommonModule,
        ParametreRoutingModule,
        LayoutAdminModule
    ]
})
export class ParametreModule { }
