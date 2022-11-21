import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchResultContentNavbarService } from './search-result-content-navbar.service';

@Component({
  selector: 'app-search-result-content-navbar',
  templateUrl: './search-result-content-navbar.component.html',
  styleUrls: ['./search-result-content-navbar.component.scss']
})
export class SearchResultContentNavbarComponent implements OnInit {

  typePodCast: string = 'book';

  sendPodcastType!: Subject<string>;

  
  constructor(private searhResultContentNavbarService: SearchResultContentNavbarService) {
    
  }
  
  
  ngOnInit(): void {
    this.searhResultContentNavbarService.isClickMe({typePodCast:'book'})
  }

  isClickMe({typePodCast}:{typePodCast: string}){
    this.typePodCast = typePodCast

    this.searhResultContentNavbarService.isClickMe({typePodCast:typePodCast})

    
  }

 

}
