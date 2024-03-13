import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PetEntity } from '../domain/pet-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly URL_BASE = environment.api+"/";

  constructor(private _http : HttpClient) {}

  addPet(pet:PetEntity):Observable<PetEntity> {
    return this._http.post<PetEntity>(this.URL_BASE+'addPet', pet)
  }

  getPets():Observable<PetEntity[]> {
    return this._http.get<PetEntity[]>(this.URL_BASE+'getAllPets');
  }
}
