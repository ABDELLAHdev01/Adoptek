import { AuthResponse } from "../domain/auth-response";
import { PetEntity } from "../domain/pet-entity";
import { UserEntity } from "../domain/user-entity";

export interface AppState {
    user: UserEntity;
    authResponse: AuthResponse;
    pet: PetEntity;
    pets: PetEntity[];
}