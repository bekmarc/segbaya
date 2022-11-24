import { Component, OnInit } from '@angular/core';
import { SearchPageService } from '../../../search-page.service';

@Component({
  selector: 'app-ebooks-container',
  templateUrl: './ebooks-container.component.html',
  styleUrls: ['./ebooks-container.component.scss']
})
export class EbooksContainerComponent implements OnInit {


  constructor(private searchPageServ : SearchPageService) { }

  ngOnInit(): void {
  }

  selectBook() {
    this.searchPageServ.selectPodCast.next({id:1});
  }

}
