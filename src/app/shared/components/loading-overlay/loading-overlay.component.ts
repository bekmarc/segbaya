import { Component, OnInit } from '@angular/core';
import {  AnimationOptions } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {
/// Lotties File Var

lottieOption: AnimationOptions = {
  path: "/assets/lottie-files/loading.json",
};

  constructor() { }

  ngOnInit(): void {
  }

}
