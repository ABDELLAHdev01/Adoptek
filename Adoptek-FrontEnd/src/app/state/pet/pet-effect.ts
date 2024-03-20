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

    getPetByOwnerSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getPetsByOwnerSuccess),
    ), {dispatch: false});

    getPetByOwnerFailure$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getPetsByOwnerFailure),
        tap(() => this.toastr.error('You Dont have any pet')),
        tap(() => this.router.navigate(['/dashboard']))
    ), {dispatch: false});


    petAddSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.addPetFailure),
        tap(() => this.router.navigate(['/dashboard']))
    ), {dispatch: false});

    petAddFeulier$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.addPetFailure),
        tap(() => this.toastr.success('Pet Addedd Successful')),
    ), {dispatch: false});

    petGetSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getPetsSuccess),
    ), {dispatch: false});


    deletePetById = createEffect(() => this.actions$.pipe(
        ofType(PetActions.deletePetById),
        mergeMap(action => this.petService.deletePetById(action.id).pipe(
            map(() => PetActions.deletePetByIdSuccess({id: action.id})),
            catchError((errorMessage) => [PetActions.deletePetByIdFailure({id: action.id})])
        ))
    ));

    deletePetByIdSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.deletePetByIdSuccess),
        tap(() => this.toastr.success('Pet Deleted Successful')),
    ), {dispatch: false});

    deletePetByIdFailure$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.deletePetByIdFailure),
        tap(() => this.toastr.success('Pet Deleted Successful')),
        tap(() => this.router.navigate(['/dashboard'])),
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

    GetFavoritePets = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getFavPets),
        mergeMap(() => this.petService.getFavoritePets().pipe(
            map(pets => PetActions.getFavPetsSuccess({pets: pets})),
            catchError((errorMessage) => [PetActions.getFavPetsFailure({errorMessage})])
        ))
    ));

    GetFavoritePetsSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getFavPetsSuccess),
    ), {dispatch: false});


    GetFavoritePetsFailure$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.getFavPetsFailure),
        tap(() => this.router.navigate(['/dashboard']))
    ), {dispatch: false});

    AddPetToFavorite$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.addPetToFav),
        mergeMap(action => this.petService.addpetToFavorites(action.id).pipe(
            map(() => PetActions.addPetToFavSuccess({id: action.id})),
            catchError((errorMessage) => [PetActions.addPetToFavFailure({id: action.id})])
        ))
    ));

    AddPetToFavoriteSuccessfully$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.addPetToFavSuccess),
        tap(() => this.toastr.success('Pet Added to Favorite Successful')),
    ), {dispatch: false});

    AddPetToFavoriteFailure$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.addPetToFavFailure),
        tap(() => this.toastr.success('Pet Added to Favorite Successful')),
        tap(() => this.router.navigate(['/dashboard/favorite'])),
    ), {dispatch: false});

    CleanPetsstate$ = createEffect(() => this.actions$.pipe(
        ofType(PetActions.cleanPetsState),
        tap(() => this.router.navigate(['/dashboard']))
    ), {dispatch: false});


    


   



}