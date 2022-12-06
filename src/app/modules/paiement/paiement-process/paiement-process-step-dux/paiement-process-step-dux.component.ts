import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaiementService } from '../../paiement.service';

@Component({
  selector: 'app-paiement-process-step-dux',
  templateUrl: './paiement-process-step-dux.component.html',
  styleUrls: ['./paiement-process-step-dux.component.scss']
})
export class PaiementProcessStepDuxComponent implements OnInit, OnDestroy {

  constructor(private payService: PaiementService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.payService._nowCancelStepper();
  }

  initiateStep() {
    // this.payService.stepperPay.subscribe(currentStepPay => {
    //   if(currentStepPay) {
    //     alert(currentStepPay)
    //     this.stepForPaiement = currentStepPay
    //   }
    // })
  }

 
}
