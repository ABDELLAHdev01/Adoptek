import { Component } from '@angular/core';
import { FavPet } from 'src/app/domain/fav-pet';
import { AppState } from 'src/app/state/app-state';
import { Store } from '@ngrx/store';
import * as petActions from '../../state/pet/pet-action';
import { Observable } from 'rxjs';
import { PetEntity } from 'src/app/domain/pet-entity';
import * as petselectot from 'src/app/state/pet/pet-selector';

@Component({
  selector: 'app-favorite-cards',
  templateUrl: './favorite-cards.component.html',
  styleUrls: ['./favorite-cards.component.css'],
})
export class FavoriteCardsComponent {
  p: number = 1;
  pets$!: Observable<PetEntity[]>; // Update the type to Observable<PetEntity>
  pets!: PetEntity[];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(petActions.cleanPetsState());

    this.store.dispatch(petActions.cleanPetsState());
    this.store.dispatch(petActions.getFavPets());
    this.pets$ = this.store.select(petselectot.selectAllPets);
    this.pets$.subscribe((pets: any) => {
      this.pets = pets;
    });
  }
}
