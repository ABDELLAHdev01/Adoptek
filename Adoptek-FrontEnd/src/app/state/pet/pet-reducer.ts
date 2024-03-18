import { createReducer, on } from '@ngrx/store';
import * as PetActions from "../pet/pet-action"
import { PetEntity } from 'src/app/domain/pet-entity';

export interface PetState {
    pets: PetEntity[];

    loading: boolean;
    error: string | null;
}

export const initialState: PetState = {
    pets: [],
    loading: false,
    error: null
};


export const petReducer = createReducer(
    initialState,

    on(PetActions.addPet, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(PetActions.addPetSuccess, (state, { pet }) => ({
        ...state,
        petList: [...state.pets, pet],
        loading: false
    })),

    on(PetActions.addPetFailure, (state, { errorMessage }) => ({
        ...state,
        loading: false,
        error: errorMessage
    })),

    on(PetActions.getPets, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(PetActions.getPetsSuccess, (state, { pets }) => ({
        ...state,
        pets: pets,
        loading: false
    })),

    on(PetActions.getPetsFailure, (state, { errorMessage }) => ({
        ...state,
        loading: false,
        error: errorMessage
    })),

    on(PetActions.getPetsByCategory, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(PetActions.getPetsByCategorySuccess, (state, { pets }) => ({
        ...state,
        pets: pets,
        loading: false
    })),

    on(PetActions.getPetsByCategoryFailure, (state, { errorMessage }) => ({
        ...state,
        loading: false,
        error: errorMessage
    }))

    ,
    on(PetActions.getPetsByOwner, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(PetActions.getPetsByOwnerSuccess, (state, { pets }) => ({
        ...state,
        pets: pets,
        loading: false
    })),

    on(PetActions.getPetsByOwnerFailure, (state, { errorMessage }) => ({
        ...state,
        loading: false,
        error: errorMessage
    }))

    ,

    on(PetActions.deletePetById, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(PetActions.deletePetByIdSuccess, (state, { id }) => ({
        ...state,
        pets: state.pets.filter(pet => pet.id !== Number(id)),
        loading: false
    })),

    on(PetActions.deletePetByIdFailure, (state, { errorMessage }) => ({
        ...state,
        loading: false,
        error: errorMessage
    })),

    on(PetActions.getPetById, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(PetActions.getPetByIdSuccess, (state, { pet }) => ({
        ...state,
        pets: [pet],
        loading: false
    })),

    
)

  



