import { Component, OnInit } from '@angular/core';
import * as UserActions from '../../state/user/user-action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/app/domain/user-entity';
import * as userSelector from '../../state/user/user-selector';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // select user
  user$!: Observable<any>;
  user!: UserEntity;

  constructor(
    private store: Store<AppState>,
    private toastr: ToastrService,
    private r: Router
  ) {
    this.user$ = this.store.select(userSelector.selectUser);
    this.user$.subscribe((user: any) => {
      this.user = user;
      console.log(user);
      if (user.roleEnum == 'Admin') {
        this.r.navigate(['/admin']);
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.getUser());
  }

  onClick() {
    this.store.dispatch(UserActions.logout());
  }
}
