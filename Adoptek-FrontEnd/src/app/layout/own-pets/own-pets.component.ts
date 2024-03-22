import { Component, OnInit } from '@angular/core';
import * as UserActions from '../../state/user/user-action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/app/domain/user-entity';
import * as userSelector from '../../state/user/user-selector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-own-pets',
  templateUrl: './own-pets.component.html',
  styleUrls: ['./own-pets.component.css'],
})
export class OwnPetsComponent {}
