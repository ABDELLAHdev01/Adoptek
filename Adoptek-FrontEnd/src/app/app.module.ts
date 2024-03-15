import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PetsThreeCardComponent } from './components/pets-three-card/pets-three-card.component';
import { BeforeFooterComponent } from './components/before-footer/before-footer.component';
import { FooterComponent } from './components/footer/footer.component';
import { StorySectionComponent } from './components/story-section/story-section.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ArticelsCardsComponent } from './components/articels-cards/articels-cards.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { SearchPetComponent } from './layout/search-pet/search-pet.component';
import { PetcardsComponent } from './components/petcards/petcards.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchBarPetComponent } from './components/search-bar-pet/search-bar-pet.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalPageComponent } from './layout/animal-page/animal-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { userReducer } from './state/user/user-reducer';
import { UserEffect } from './state/user/user-effect';
import { AboutAnimalComponent } from './components/about-animal/about-animal.component';
import { QuizComponent } from './layout/quiz/quiz.component';
import { PutPetComponent } from './layout/put-pet/put-pet.component';
import { BodyImgComponent } from './components/body-img/body-img.component';
import { PetEffect } from './state/pet/pet-effect';
import { JwthelperInterceptor } from './interceptor/jwthelper.interceptor';
import { DogPetsComponent } from './components/dog-pets/dog-pets.component';
import { CatPETComponent } from './components/cat-pet/cat-pet.component';
import { petReducer } from './state/pet/pet-reducer';
import {NgxPaginationModule} from 'ngx-pagination';
import { OwnPetsComponent } from './layout/own-pets/own-pets.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OwnPetCardsComponent } from './components/own-pet-cards/own-pet-cards.component';
import { FavoriteCardsComponent } from './components/favorite-cards/favorite-cards.component'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomePageComponent,
    NavbarComponent,
    JumbotronComponent,
    SearchBarComponent,
    PetsThreeCardComponent,
    BeforeFooterComponent,
    FooterComponent,
    StorySectionComponent,
    StatisticsComponent,
    ArticelsCardsComponent,
    SearchPetComponent,
    PetcardsComponent,
    SortButtonComponent,
    SideBarComponent,
    SearchBarPetComponent,
    BannerComponent,
    AnimalPageComponent,
    GalleryComponent,
    AboutAnimalComponent,
    QuizComponent,
    PutPetComponent,
    BodyImgComponent,
    DogPetsComponent,
    CatPETComponent,
    OwnPetsComponent,
    SidebarComponent,
    OwnPetCardsComponent,
    FavoriteCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    StoreModule.forRoot({user: userReducer ,pets : petReducer}, {}),
    EffectsModule.forRoot([UserEffect,PetEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwthelperInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
