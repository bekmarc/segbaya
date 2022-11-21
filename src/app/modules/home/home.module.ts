import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorsSectionComponent } from './components/authors-section/authors-section.component';
import { AudiosSectionComponent } from './components/audios-section/audios-section.component';
import { VideosSectionComponent } from './components/videos-section/videos-section.component';
import { PublishersSectionComponent } from './components/publishers-section/publishers-section.component';
import { SectionHeaderComponent } from './components/acceuil/section-header/section-header.component';
import { SectionHeaderAllComponent } from './components/acceuil/section-header-all/section-header-all.component';
import { BooksSectionComponent } from './components/books-section/books-section.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';


@NgModule({
  declarations: [
    AcceuilComponent,
    SearchbarComponent,
    AuthorsSectionComponent,
    AudiosSectionComponent,
    VideosSectionComponent,
    PublishersSectionComponent,
    SectionHeaderComponent,
    SectionHeaderAllComponent,
    BooksSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutsModule,
    SharedModule
  ]
})
export class HomeModule { }
