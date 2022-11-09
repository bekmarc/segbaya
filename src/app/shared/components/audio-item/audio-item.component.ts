import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.scss']
})
export class AudioItemComponent implements OnInit {

  @ViewChild("pod") pod!: ElementRef;
  @ViewChild("loading_audio") loading_audio!: ElementRef;

  @ViewChild("loading_line") loading_line!: ElementRef;
  audio = new Audio("../assets/audios/audio_test.mp3");
  trueVal: number = 50;

  currentTime: string = "00:00:00";
  duration: string = "00:00:00";
  durationSeek: number = 0;
  seek: number = 0;
  toggleValue: boolean = false;
  muteVol: boolean = false;

  constructor(private renderer: Renderer2, private audioService: AudioService) { }

  ngOnInit(): void {

  }

  changePart(value: any) {
    this.trueVal = value;
    this.renderer.setStyle(this.pod.nativeElement, 'display', `flex`);
    this.renderer.setStyle(this.pod.nativeElement, 'transform', `translateX(${(this.trueVal * 190) / 50}%)`);
  }

  @HostListener("mouseup") noneDesiplay() {
    this.renderer.setStyle(this.pod.nativeElement, 'display', `none`);
  }

  @HostListener("input") loadingAudio() {
 
  }

  createAudio() {
    this.audioService.playStream(this.audio).subscribe(event => {
      this.getTimeBeginEnd(event)
      console.log('yoooooooooo')
      this.renderer.setStyle(this.loading_line.nativeElement, 'width', `${(this.seek*65)/this.durationSeek}%`);
    })
  }

  getTimeBeginEnd(event: Event) {
    this.seek = this.audio.currentTime;
    this.durationSeek = this.audio.duration;
    this.duration = this.formatTime(this.audio.duration);
    this.currentTime = this.formatTime(this.audio.currentTime);
  }

  formatTime(time: any, format = "HH:mm:ss") {
    return this.audioService.makeFormatTime(time);
  }

  pauseAudio() {
    this.audioService.pausedAudio(this.audio);
  }

  togglePausePlay() {
    if (this.toggleValue) {
      this.pauseAudio()
    } else {
      this.createAudio()
    }
    this.toggleValue = !this.toggleValue;
  }

  setSeek(event: any) {
    this.audioService.seekTo(this.audio, event);
  }

  setVolume(event: Event) {
    this.audioService.setAudioVolume(this.audio, event)
    //this.audioService.seekTo(this.audio, event);
  }

  toggleMute(){
    if (this.muteVol) {
      this.audio.muted = true;
    } else {
      this.audio.muted = false;
    }
    this.muteVol = !this.muteVol;
  }

 



  



}
