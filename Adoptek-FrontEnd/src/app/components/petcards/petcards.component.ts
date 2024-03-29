import { Component, OnInit } from '@angular/core';
import { PetEntity } from 'src/app/domain/pet-entity';
import * as PetAction from 'src/app/state/pet/pet-action';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { Observable } from 'rxjs';
import * as petselectot from 'src/app/state/pet/pet-selector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-petcards',
  templateUrl: './petcards.component.html',
  styleUrls: ['./petcards.component.css'],
})
export class PetcardsComponent implements OnInit {
  p: number = 1;

  pets$!: Observable<PetEntity[]>;
  pets: any;

  constructor(private store: Store<AppState>, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.store.dispatch(PetAction.getPets());
    this.pets$ = this.store.select(petselectot.selectAllPets);
    this.pets$.subscribe((pets: any) => {
      this.pets = pets;
      console.log(pets);
    });
  }
}
