import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  stepperPay = new ReplaySubject<number>();

  constructor() { }

  _nowUpdatedStepper(stepPaiement: number) {
    return this.stepperPay.next(stepPaiement);
  }

  _nowCancelStepper() {
    this.stepperPay.unsubscribe();
  }
}
