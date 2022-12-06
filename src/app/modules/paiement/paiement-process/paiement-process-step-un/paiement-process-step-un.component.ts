import { Component, OnInit } from '@angular/core';
import { PaiementService } from '../../paiement.service';

@Component({
  selector: 'app-paiement-process-step-un',
  templateUrl: './paiement-process-step-un.component.html',
  styleUrls: ['./paiement-process-step-un.component.scss']
})
export class PaiementProcessStepUnComponent implements OnInit {

  isPendingStep = false;

  stepForPaiement : number = 1;
  constructor(private payService: PaiementService) { }


  ngOnInit(): void {
    this.initiateStep();
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

  endForStep01(){
    this.isPendingStep = true
    setTimeout(() => {
      this.payService._nowUpdatedStepper(2);
      this.isPendingStep = false
    }, 4000);
  }

}
