import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchResultContentNavbarService } from '../search-result-content-navbar/search-result-content-navbar.service';

@Component({
  selector: 'app-search-result-content-container',
  templateUrl: './search-result-content-container.component.html',
  styleUrls: ['./search-result-content-container.component.scss']
})
export class SearchResultContentContainerComponent implements OnInit, OnDestroy {

  unscribeSendPodcastType! :  Subscription;
  choiceTypePod! : string;

  constructor(private searhResultContentNavbarService: SearchResultContentNavbarService ) { 
    this.unscribeSendPodcastType = this.searhResultContentNavbarService.sendPodcastType.subscribe(typePodCast => {
      console.log("typePodCast")
      console.log(typePodCast)
      this.choiceTypePod = typePodCast;
      console.log("typePodCast")
    })
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.unscribeSendPodcastType.unsubscribe()
  }




}
