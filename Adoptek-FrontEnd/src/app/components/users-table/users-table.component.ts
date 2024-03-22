import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import * as UserActions from '../../state/user/user-action';
import { UserEntity } from 'src/app/domain/user-entity';
import { Observable } from 'rxjs';
import * as userSelector from 'src/app/state/user/user-selector'
 

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users$!: Observable<any> 
  users: UserEntity[] = [];
  

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(UserActions.getAllUsers());
    this.users$ = this.store.select(userSelector.selectAllUsers);
    this.users$.subscribe((users: any) => {
      this.users = users.users;
      console.log(this.users);

  

      // Remove all admins from this.users
      this.users = this.users.filter(user => user.roleEnum !== "Admin");
    });

  
   
  }

  promoteUserToAdmin(email: string){
    this.store.dispatch(UserActions.promoteUserToAdmin({email}));
    this.users = this.users.filter(user => user.email !== email);

  }


}