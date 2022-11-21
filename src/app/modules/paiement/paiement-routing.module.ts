import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiementViewComponent } from './paiement-view/paiement-view.component';
import { PaiementComponent } from './paiement.component';

const routes: Routes = [
  {
    path: '',
    component: PaiementComponent,
    children: [
      {
        path: '',
        component: PaiementViewComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaiementRoutingModule { }
