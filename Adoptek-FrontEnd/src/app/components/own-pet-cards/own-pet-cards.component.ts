import { Component, OnInit } from '@angular/core';
import * as PetAction from '../../state/pet/pet-action';
import { PetEntity } from 'src/app/domain/pet-entity';
import { AppState } from 'src/app/state/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as petselectot from 'src/app/state/pet/pet-selector';

@Component({
  selector: 'app-own-pet-cards',
  templateUrl: './own-pet-cards.component.html',
  styleUrls: ['./own-pet-cards.component.css'],
})
export class OwnPetCardsComponent implements OnInit {
  pets$!: Observable<PetEntity[]>;
  pets: any;
  p: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(PetAction.cleanPetsState());

    this.store.dispatch(PetAction.getPetsByOwner());
    this.pets$ = this.store.select(petselectot.selectAllPets);
    this.pets$.subscribe((pets: any) => {
      this.pets = pets;
    });
  }

  deletePet(id: any) {
    this.store.dispatch(PetAction.deletePetById({ id }));
  }
}
