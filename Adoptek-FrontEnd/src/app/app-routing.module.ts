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
import { DogPetsComponent } from './components/dog-pets/dog-pets.component';
import { CatPETComponent } from './components/cat-pet/cat-pet.component';
import { PetcardsComponent } from './components/petcards/petcards.component';
import { OwnPetsComponent } from './layout/own-pets/own-pets.component';
import { OwnPetCardsComponent } from './components/own-pet-cards/own-pet-cards.component';
import { FavoriteCardsComponent } from './components/favorite-cards/favorite-cards.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: OwnPetsComponent,
    children: [
      {
        path: "ownpets",
        component: OwnPetCardsComponent
      },
      {
        path: "favorite",
        component: FavoriteCardsComponent
      },
      {
        path: "**",
        component: OwnPetCardsComponent
      }
    ]
  },
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
    component: SearchPetComponent,
    children: [
      {
        path: "dog",
        component: DogPetsComponent
        
      },
      {
        path: "cat",
        component: CatPETComponent
      },
      {
        path: "**",
        component: PetcardsComponent
      }
 ] 

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
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
