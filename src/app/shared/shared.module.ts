import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherItemComponent } from './components/publisher-item/publisher-item.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { AudioItemComponent } from './components/audio-item/audio-item.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SpinnerCoolComponent } from './components/spinner-cool/spinner-cool.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    PublisherItemComponent,
    AuthorItemComponent,
    AudioItemComponent,
    BookItemComponent,
    ButtonComponent,
    VideoItemComponent,
    LoadingOverlayComponent,
    SpinnerCoolComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({player: playerFactory})

  ],
  exports: [
    PublisherItemComponent,
    AuthorItemComponent,
    AudioItemComponent,
    BookItemComponent,
    SpinnerCoolComponent,
    VideoItemComponent,
    ButtonComponent,
    LoadingOverlayComponent
  ]
})
export class SharedModule { }
