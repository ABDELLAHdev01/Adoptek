import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { UserState } from './user-reducer';

export const selectUserFeature = createFeatureSelector<AppState, UserState>(
  'user'
);

export const selectUser = createSelector(
  selectUserFeature,
  (state) => state.userInfo
);

export const selectAllUsers = createFeatureSelector<AppState, UserState>(
  'user'
);

export const selectUsers = createSelector(
  selectAllUsers,
  (state) => state.users
);
