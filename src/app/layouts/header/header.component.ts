import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @ViewChild("over_search") over_search!: ElementRef;

  constructor(private renderr: Renderer2) { }

  ngOnInit(): void {
  }

  focusMe(event:Event) {

    this.renderr.setStyle(this.over_search.nativeElement, "opacity", "1")
    this.renderr.setStyle(this.over_search.nativeElement, "visibility", "visible")

    
    console.log('iffifofiof')
    console.log('iffifofiof')
    console.log('iffifofiof')

  }
  blurMe() {

    this.renderr.setStyle(this.over_search.nativeElement, "opacity", "0")
    this.renderr.setStyle(this.over_search.nativeElement, "visibility", "hidden")

    
    console.log('iffifofiof')
    console.log('iffifofiof')
    console.log('iffifofiof')

  }

}
