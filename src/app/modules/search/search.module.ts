import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { SearchFilterComponent } from './components/search-page/search-filter/search-filter.component';
import { SearchResultContentComponent } from './components/search-page/search-result-content/search-result-content.component';
import { SearchResultContentValueComponent } from './components/search-page/search-result-content/search-result-content-value/search-result-content-value.component';
import { SearchResultContentNavbarComponent } from './components/search-page/search-result-content/search-result-content-navbar/search-result-content-navbar.component';
import { SearchResultContentContainerComponent } from './components/search-page/search-result-content/search-result-content-container/search-result-content-container.component';
import { AudiosContainerComponent } from './components/search-page/search-result-content/search-result-content-container/audios-container/audios-container.component';
import { EbooksContainerComponent } from './components/search-page/search-result-content/search-result-content-container/ebooks-container/ebooks-container.component';
import { VideosContainerComponent } from './components/search-page/search-result-content/search-result-content-container/videos-container/videos-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPageDetailsComponent } from './components/search-page/search-page-details/search-page-details.component';
import { BooksModalContentComponent } from './components/search-page/search-page-details/books-modal-content/books-modal-content.component';
import { AudiosModalContentComponent } from './components/search-page/search-page-details/audios-modal-content/audios-modal-content.component';
import { VideosModalContentComponent } from './components/search-page/search-page-details/videos-modal-content/videos-modal-content.component';
import { NavDetailsComponent } from './components/search-page/search-page-details/nav-details/nav-details.component';
import { BookContenuComponent } from './components/search-page/search-page-details/books-modal-content/book-contenu/book-contenu.component';
import { BookDescriptionComponent } from './components/search-page/search-page-details/books-modal-content/book-description/book-description.component';
import { OtherContentCategorieComponent } from './components/search-page/search-page-details/books-modal-content/other-content-categorie/other-content-categorie.component';


@NgModule({
  declarations: [
    SearchComponent,
    SearchPageComponent,
    SearchFilterComponent,
    SearchResultContentComponent,
    SearchResultContentValueComponent,
    SearchResultContentNavbarComponent,
    SearchResultContentContainerComponent,
    AudiosContainerComponent,
    EbooksContainerComponent,
    VideosContainerComponent,
    SearchPageDetailsComponent,
    BooksModalContentComponent,
    AudiosModalContentComponent,
    VideosModalContentComponent,
    NavDetailsComponent,
    BookContenuComponent,
    BookDescriptionComponent,
    OtherContentCategorieComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    LayoutsModule,
    SharedModule
  ]
})
export class SearchModule { }
