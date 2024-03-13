import { createReducer, on } from '@ngrx/store';
import * as PetActions from "../pet/pet-action"
import { PetEntity } from 'src/app/domain/pet-entity';

export interface PetState {
    petList: PetEntity[];
    loading: boolean;
    error: string | null;
}

export const initialState: PetState = {
    petList: [],
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
        petList: [...state.petList, pet],
        loading: false
    })),

)

  



