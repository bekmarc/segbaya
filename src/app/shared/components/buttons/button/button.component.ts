import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event:MouseEvent){
    this.onClick.emit(event);
  }

}
