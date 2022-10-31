import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherItemComponent } from './components/publisher-item/publisher-item.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { AudioItemComponent } from './components/audio-item/audio-item.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { ButtonComponent } from './components/buttons/button/button.component';



@NgModule({
  declarations: [
    PublisherItemComponent,
    AuthorItemComponent,
    AudioItemComponent,
    BookItemComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PublisherItemComponent,
    AuthorItemComponent,
    AudioItemComponent,
    BookItemComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
