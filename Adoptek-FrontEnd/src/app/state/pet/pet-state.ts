import { PetEntity } from "src/app/domain/pet-entity";

export interface PetState {
    pets: PetEntity[];
    loading: boolean;
    error: string | null;
}