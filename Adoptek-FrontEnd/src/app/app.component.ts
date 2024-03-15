import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import * as UserActions from './state/user/user-action';
import { Store } from '@ngrx/store';
import { AppState } from './state/app-state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Adoptek-FrontEnd';
  tokenstring!: string;
  constructor(
    private store: Store<AppState>,


  ) { 
        this.tokenstring = localStorage.getItem('token')+'';

  }

  ngOnInit(): void {
    initFlowbite();
    this.store.dispatch(UserActions.checkJwtValidity({token: this.tokenstring}))

  }
}
