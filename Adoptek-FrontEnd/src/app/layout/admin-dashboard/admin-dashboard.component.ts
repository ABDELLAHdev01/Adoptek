import { Component, OnInit } from '@angular/core';
import * as UserActions from '../../state/user/user-action'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/app/domain/user-entity';
import * as userSelector from '../../state/user/user-selector';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  // select user 
  user$!: Observable<any>;
  user!: UserEntity;

  constructor(private store: Store<AppState>
    , private toastr: ToastrService
    , private r: Router
    ) {
    this.user$ = this.store.select(userSelector.selectUser);
    this.user$.subscribe((user: any) => {
      this.user = user;
      console.log(user);
      if(user.roleEnum == "User"){
        this.toastr.error("You are not authorized to access this page");
        this.r.navigate(['/dashboard']);
      }
    });
  
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.getUser());
  }

  onClick(){
    this.store.dispatch(UserActions.logout());
  }

}
