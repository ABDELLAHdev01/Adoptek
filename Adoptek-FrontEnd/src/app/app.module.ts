import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PetsThreeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
