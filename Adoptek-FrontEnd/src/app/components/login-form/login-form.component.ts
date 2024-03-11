import { Component ,OnInit  } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import * as UserActions from '../../state/user/user-action';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserEntity } from 'src/app/domain/user-entity';
import { UserEntityLogin } from 'src/app/domain/user-entity-login';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  user!: UserEntityLogin;
  ngOnInit(): void {
    this.loginForm = this._fb.group({ 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  

    loginUser(userData: UserEntityLogin) {
      
      this.store.dispatch(UserActions.login({ user: userData }));

    }

  onSubmit() {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value;
      this.loginUser(this.user);
    } else {
      console.error('Form is invalid');
    }
  }
  constructor(
    private store: Store<AppState>,
    private _fb: FormBuilder,
    private router : Router
    
    ) {}

}
