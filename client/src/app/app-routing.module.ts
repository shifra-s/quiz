import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { QuizzesListComponent } from './quizzes-list/quizzes-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'quiz', component: QuizzesListComponent},
  {path:'about', component: AboutComponent},
  { path: 'quiz/:id', component: QuizComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
