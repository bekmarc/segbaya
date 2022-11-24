import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchPageService } from './search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  unsubPodValue! : Subscription;
  isOpenDetail: boolean = false
  constructor(private searchServ: SearchPageService) { }
  
  ngOnInit(): void {
    this.unsubPodValue = this.searchServ.selectPodCast.subscribe(data => {
      this.isOpenDetail = true;
    })
  }
  
  ngOnDestroy(): void {
    this.unsubPodValue.unsubscribe();
  }
}
