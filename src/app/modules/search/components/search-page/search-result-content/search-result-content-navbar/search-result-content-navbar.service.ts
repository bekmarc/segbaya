import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchResultContentNavbarService {

  sendPodcastType = new Subject<string>();

  constructor() { }

  isClickMe({typePodCast}:{typePodCast: string}){


    switch (typePodCast) {
      case 'video':
         this.sendPodcastType.next(typePodCast)
        break;
      case 'book':
         this.sendPodcastType.next(typePodCast)

        break;
      case 'audio':
         this.sendPodcastType.next(typePodCast)

        break;
    
      default:
        break;
    }

    
  }
}

