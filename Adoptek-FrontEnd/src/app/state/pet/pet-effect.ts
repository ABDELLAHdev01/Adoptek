import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PetActions from "../pet/pet-action"

import { Injectable } from '@angular/core';

import { catchError, map, mergeMap } from 'rxjs/operators';


import { PetService } from 'src/app/service/pet.service';

@Injectable()
export class PetEffect {
    constructor(
        private actions$: Actions,
        private petService:PetService
        ){}

    addPet$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.addPet),
        mergeMap(action => this.petService.addPet(action.pet).pipe(
            map(pet => PetActions.addPetSuccess({pet})),
            catchError((errorMessage) => [PetActions.addPetFailure({errorMessage})])
        ))
    ));
}