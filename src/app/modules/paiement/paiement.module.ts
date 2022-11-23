import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaiementRoutingModule } from './paiement-routing.module';
import { PaiementComponent } from './paiement.component';
import { PaiementViewComponent } from './paiement-view/paiement-view.component';
import { PaiementProcessComponent } from './paiement-process/paiement-process.component';
import { PaiementCheckoutComponent } from './paiement-checkout/paiement-checkout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaiementProcessStepUnComponent } from './paiement-process/paiement-process-step-un/paiement-process-step-un.component';
import { PaiementProcessStepDuxComponent } from './paiement-process/paiement-process-step-dux/paiement-process-step-dux.component';


@NgModule({
  declarations: [
    PaiementComponent,
    PaiementViewComponent,
    PaiementProcessComponent,
    PaiementCheckoutComponent,
    PaiementProcessStepUnComponent,
    PaiementProcessStepDuxComponent
  ],
  imports: [
    CommonModule,
    PaiementRoutingModule,
    SharedModule
  ]
})
export class PaiementModule { }
