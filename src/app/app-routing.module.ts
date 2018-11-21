import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopArticlesComponent } from './components/top-articles/top-articles.component';
import { StoryComponent } from './components/story/story.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopArticlesComponent },
  { path: 'story/:id', component: StoryComponent },
  { path: '**', redirectTo: '/404error', pathMatch: 'full' },
  { path: '404error', component: NotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
