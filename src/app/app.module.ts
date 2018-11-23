import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http'; 
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,  
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatGridListModule
} from '@angular/material';

//Componentes Genéricos
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppComponent } from './app.component';

//Componentes de la página web
import { TopArticlesComponent } from './components/top-articles/top-articles.component';
import { ArticlePreviewComponent } from './components/top-articles/article-preview/article-preview.component';
import { StoryComponent } from './components/story/story.component';
import { CommentCardComponent } from './components/story/comment-card/comment-card.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';

//Servicio para la conexión con API
import { APIService } from './services/api.service';

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
    MatGridListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
