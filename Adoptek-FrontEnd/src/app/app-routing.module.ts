import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { SearchPetComponent } from './layout/search-pet/search-pet.component';
import { AnimalPageComponent } from './layout/animal-page/animal-page.component';
import { QuizComponent } from './layout/quiz/quiz.component';
import { PutPetComponent } from './layout/put-pet/put-pet.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginFormComponent
      }
      ,
      {
        path: "register",
        component: RegisterFormComponent
      }
      ,
      {
        path: "**",
        redirectTo: "login"

      }
    ]
  },
  {
    path: "search",
    component: SearchPetComponent
  },
  {
    path: "animal",
    component: AnimalPageComponent
  },
  {
    path: "quiz",
    component: QuizComponent
  },
  {
    path: "putpet",
    component: PutPetComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
