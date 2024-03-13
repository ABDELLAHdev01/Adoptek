import { createAction , props } from "@ngrx/store";
import { PetEntity } from "src/app/domain/pet-entity";

export const addPet = createAction(
    '[Pet] Add Pet',
    props<{ pet: PetEntity }>()
);

export const addPetSuccess = createAction(
    '[Pet] Add Pet Success',
    props<{ pet: PetEntity }>()
);

export const addPetFailure = createAction(
    '[Pet] Add Pet Failure',
    props<{ errorMessage: string }>()
);

export const getPets = createAction(
    '[Pet] Get Pets'
);

export const getPetsSuccess = createAction(
    '[Pet] Get Pets Success',
    props<{ pets: PetEntity[] }>()
);

export const getPetsFailure = createAction(
    '[Pet] Get Pets Failure',
    props<{ errorMessage: string }>()
);