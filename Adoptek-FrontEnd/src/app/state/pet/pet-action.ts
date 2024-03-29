import { createAction, props } from '@ngrx/store';
import { FavPet } from 'src/app/domain/fav-pet';
import { PetEntity } from 'src/app/domain/pet-entity';

export const addPet = createAction('[Pet] Add Pet', props<{ pet: FormData }>());

export const addPetSuccess = createAction(
  '[Pet] Add Pet Success',
  props<{ pet: FormData }>()
);

export const addPetFailure = createAction(
  '[Pet] Add Pet Failure',
  props<{ errorMessage: string }>()
);

export const getPets = createAction('[Pet] Get Pets');

export const getPetsSuccess = createAction(
  '[Pet] Get Pets Success',
  props<{ pets: PetEntity[] }>()
);

export const getPetsFailure = createAction(
  '[Pet] Get Pets Failure',
  props<{ errorMessage: string }>()
);

export const getPetsByCategory = createAction(
  '[Pet] Get Pets By Category',
  props<{ category: string }>()
);

export const getPetsByCategorySuccess = createAction(
  '[Pet] Get Pets By Category Success',
  props<{ pets: PetEntity[] }>()
);

export const getPetsByCategoryFailure = createAction(
  '[Pet] Get Pets By Category Failure',
  props<{ errorMessage: string }>()
);

export const getPetsByOwner = createAction('[Pet] Get Pets By Owner');

export const getPetsByOwnerSuccess = createAction(
  '[Pet] Get Pets By Owner Success',
  props<{ pets: PetEntity[] }>()
);

export const getPetsByOwnerFailure = createAction(
  '[Pet] Get Pets By Owner Failure',
  props<{ errorMessage: string }>()
);

export const deletePetById = createAction(
  '[Pet] Delete Pet By Id',
  props<{ id: string }>()
);

export const deletePetByIdSuccess = createAction(
  '[Pet] Delete Pet By Id Success',
  props<{ id: string }>()
);

export const deletePetByIdFailure = createAction(
  '[Pet] Delete Pet By Id Failure',
  props<{ id: string }>()
);

export const getPetById = createAction(
  '[Pet] Get Pet By Id',
  props<{ id: number }>()
);

export const getPetByIdSuccess = createAction(
  '[Pet] Get Pet By Id Success',
  props<{ pet: PetEntity }>()
);

export const getPetByIdFailure = createAction(
  '[Pet] Get Pet By Id Failure',
  props<{ errorMessage: string }>()
);

export const getFavPets = createAction('[Pet] Get Fav Pets');

export const getFavPetsSuccess = createAction(
  '[Pet] Get Fav Pets Success',
  props<{ pets: PetEntity[] }>()
);

export const getFavPetsFailure = createAction(
  '[Pet] Get Fav Pets Failure',
  props<{ errorMessage: string }>()
);

export const addPetToFav = createAction(
  '[Pet] Add Pet To Fav',
  props<{ id: string }>()
);

export const addPetToFavSuccess = createAction(
  '[Pet] Add Pet To Fav Success',
  props<{ id: string }>()
);

export const addPetToFavFailure = createAction(
  '[Pet] Add Pet To Fav Failure',
  props<{ id: string }>()
);

export const cleanPetsState = createAction('[Pet] Clean Pets State');
