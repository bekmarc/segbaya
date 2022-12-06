import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaiementService } from '../paiement.service';

@Component({
  selector: 'app-paiement-process',
  templateUrl: './paiement-process.component.html',
  styleUrls: ['./paiement-process.component.scss']
})
export class PaiementProcessComponent implements OnInit, OnDestroy {

  stepForPaiement : number = 1;
  constructor(private payService: PaiementService) { }


  ngOnInit(): void {
    this.initiateStep();
  }

  ngOnDestroy(): void {
    this.payService._nowCancelStepper();
  }

  initiateStep() {
    this.payService.stepperPay.subscribe(currentStepPay => {
      if(currentStepPay) {
        alert(currentStepPay)
        this.stepForPaiement = currentStepPay
      }
    })
  }

  goToPreviousPayStep(){
    
    this.stepForPaiement = 1
    this.payService._nowUpdatedStepper(1);
    alert(this.stepForPaiement)

  }

  

}
