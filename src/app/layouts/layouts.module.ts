import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAcceuilComponent } from './header-acceuil/header-acceuil.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderAcceuilComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderAcceuilComponent,
    HeaderComponent
  ]
})
export class LayoutsModule { }
