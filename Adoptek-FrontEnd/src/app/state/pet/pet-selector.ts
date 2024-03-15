import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { PetState } from './pet-reducer';

export const selectPetFeature = createFeatureSelector<AppState, PetState>('pets');

export const selectAllPets = createSelector(
    selectPetFeature,
    state => state.pets
);

export const selectPetLoading = createSelector(
    selectPetFeature,
    state => state.loading
);

export const selectPetError = createSelector(
    selectPetFeature,
    state => state.error
);






