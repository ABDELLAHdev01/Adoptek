import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import * as UserActions from '../../state/user/user-action';

@Component({
  selector: 'app-put-pet',
  templateUrl: './put-pet.component.html',
  styleUrls: ['./put-pet.component.css'],
})
export class PutPetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
