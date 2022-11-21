import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchResultContentNavbarService } from '../../search-result-content/search-result-content-navbar/search-result-content-navbar.service';

@Component({
  selector: 'app-nav-details',
  templateUrl: './nav-details.component.html',
  styleUrls: ['./nav-details.component.scss']
})
export class NavDetailsComponent implements OnInit {

  typeDetails: string = 'contenu';

  sendPodcastType!: Subject<string>;

  
  constructor(private searhResultContentNavbarService: SearchResultContentNavbarService) {
    
  }
  
  
  ngOnInit(): void {
    //this.searhResultContentNavbarService.isClickMe({typeDetails:'book'})
  }

  isClickMe({typeDetails}:{typeDetails: string}){
    this.typeDetails = typeDetails

    //this.searhResultContentNavbarService.isClickMe({typeDetails:typeDetails})

    
  }

}
