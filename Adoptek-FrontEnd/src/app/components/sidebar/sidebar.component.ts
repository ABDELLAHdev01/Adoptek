import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import * as UserActions from '../../state/user/user-action';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(
    private store: Store<AppState>,
    ) {}

  onClick(){
    this.store.dispatch(UserActions.logout());
  }

}
