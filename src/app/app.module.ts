import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopArticlesComponent } from './components/top-articles/top-articles.component';
import { StoryComponent } from './components/story/story.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';

import { APIService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    TopArticlesComponent,
    StoryComponent,
    NotFoundErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
