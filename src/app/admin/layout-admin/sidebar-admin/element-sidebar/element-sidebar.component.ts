import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-sidebar',
  templateUrl: './element-sidebar.component.html',
  styleUrls: ['./element-sidebar.component.scss']
})
export class ElementSidebarComponent implements OnInit {

  @Input() parentLink : any;
  @Input() childLinks!: any[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
