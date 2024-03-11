import { AuthResponse } from "../domain/auth-response";
import { UserEntity } from "../domain/user-entity";

export interface AppState {
    user: UserEntity;
    authResponse: AuthResponse;
}