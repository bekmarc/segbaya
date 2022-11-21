import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchResultContentNavbarService } from '../../search-result-content/search-result-content-navbar/search-result-content-navbar.service';

@Component({
  selector: 'app-books-modal-content',
  templateUrl: './books-modal-content.component.html',
  styleUrls: ['./books-modal-content.component.scss']
})
export class BooksModalContentComponent implements OnInit {

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
