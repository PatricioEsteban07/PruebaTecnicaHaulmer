import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http'; 
import {
  MatToolbarModule,  
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatGridListModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppComponent } from './app.component';

import { TopArticlesComponent } from './components/top-articles/top-articles.component';
import { ArticlePreviewComponent } from './components/top-articles/article-preview/article-preview.component';
import { StoryComponent } from './components/story/story.component';
import { CommentCardComponent } from './components/story/comment-card/comment-card.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';

import { APIService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AppComponent,
    TopArticlesComponent,
    ArticlePreviewComponent,
    StoryComponent,
    CommentCardComponent,
    NotFoundErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,   
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
