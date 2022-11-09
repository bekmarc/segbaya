import { Injectable } from '@angular/core';

import { Observable, Subject, takeUntil } from "rxjs";
import * as moment from "moment";


@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  stop$ = new Subject();

  constructor() { }

  playAudio(audio: HTMLAudioElement): void {

    
    //audio.load();
    audio.play();
  }


  pausedAudio(audio: HTMLAudioElement): void {
    audio.pause();
  }


  onPlayingAudio(audio: HTMLAudioElement): Observable<Event> {
      this.playAudio(audio);

      return new Observable(observer => {
        
        const handler = (event: Event) => {
          //console.log(event)
          observer.next(event);
        }

        this.addEvent(audio, this.audioEvents, handler)

        return () => {
          audio.pause();
          audio.currentTime = 0;

          this.removeEvent(audio, this.audioEvents, handler)
        }
      })

  }

  addEvent(audioo:HTMLAudioElement, events:any[], handler:any) {
    events.forEach(event => {
        audioo.addEventListener(event, handler);
    });
  }

  removeEvent(audioo:HTMLAudioElement, events:any[], handler:any) {
    events.forEach(event => {
        audioo.removeEventListener(event, handler);
    });
  }

  playStream(audioo:HTMLAudioElement) {
    return this.onPlayingAudio(audioo).pipe(takeUntil(this.stop$));
  }


  seekTo(audioo:HTMLAudioElement, event: any){
    audioo.currentTime = event.target.value;
    //this.seek = event.target.value;
  }


  makeFormatTime(time: any, format="HH:mm:ss"){
    const momentTime = time * 1000  // for second neither millisecond
    return moment.utc(momentTime).format(format);
  }
  setAudioVolume(audioo: HTMLAudioElement, event: any){
    console.log("everrrnt")
    audioo.volume = event.target.value;
    console.log(event.target.value)
    console.log("everrrrnt")
  }


  
}
