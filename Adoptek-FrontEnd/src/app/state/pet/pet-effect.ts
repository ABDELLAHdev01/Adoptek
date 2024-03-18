import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PetActions from "../pet/pet-action"
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { catchError, map, mergeMap } from 'rxjs/operators';


import { PetService } from 'src/app/service/pet.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class PetEffect {
    constructor(
        private actions$: Actions,
        private router: Router,
        private petService:PetService,
        private toastr: ToastrService
        ){}

    addPet$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.addPet),
        mergeMap(action => this.petService.addPet(action.pet).pipe(
            map(pet => PetActions.addPetSuccess({pet})),
            catchError((errorMessage) => [PetActions.addPetFailure({errorMessage})])
        ))
    ));

    getPets$ = createEffect(()=> this.actions$.pipe(
        ofType(PetActions.getPets),
        mergeMap(() => this.petService.getPets().pipe(
            map(pets => PetActions.getPetsSuccess({pets})),
            catchError((errorMessage) => [PetActions.getPetsFailure({errorMessage})])
        ))
    )
    );

    getPetsByCategory$ = createEffect(()=> this.actions$.pipe(
        ofType(PetActions.getPetsByCategory),
        mergeMap(action => this.petService.getPetsByCategory(action.category).pipe(
            map(pets => PetActions.getPetsByCategorySuccess({pets})),
            catchError((errorMessage) => [PetActions.getPetsByCategoryFailure({errorMessage})])
        ))
    )
    );

    getPetsByOwner$ = createEffect(()=> this.actions$.pipe(
        ofType(PetActions.getPetsByOwner),
        mergeMap(() => this.petService.getPetsByOwner().pipe(
            map(pets => PetActions.getPetsByOwnerSuccess({pets})),
            catchError((errorMessage) => [PetActions.getPetsByOwnerFailure({errorMessage})])
        ))
    )
    );

    petAddSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.addPetFailure),
        tap(() => this.router.navigate(['/dashboard']))
    ), {dispatch: false});

    petAddFeulier$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.addPetFailure),
        tap(() => this.toastr.success('Put Addedd Successful')),
    ), {dispatch: false});

    petGetSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getPetsSuccess),
    ), {dispatch: false});


    deletePetById = createEffect(() => this.actions$.pipe(
        ofType(PetActions.deletePetById),
        mergeMap(action => this.petService.deletePetById(action.id).pipe(
            map(() => PetActions.deletePetByIdSuccess({id: action.id})),
            catchError((errorMessage) => [PetActions.deletePetByIdFailure({errorMessage})])
        ))
    ));

    deletePetByIdSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.deletePetByIdSuccess),
        tap(() => this.router.navigate(['/dashboard']))
    ), {dispatch: false});


    getPetsByid = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getPetById),
        mergeMap(action => this.petService.getpetById(action.id).pipe(
            map(pet => PetActions.getPetByIdSuccess({pet})),
            catchError((errorMessage) => [PetActions.getPetByIdFailure({errorMessage})])
        ))
    ));

    getPetByIdSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getPetByIdSuccess),
        
    ), {dispatch: false});

    getPetByIdFailure$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getPetByIdFailure),
        tap(() => this.router.navigate(['/dashboard']))
    ), {dispatch: false});


   



}