import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PetEntity } from '../domain/pet-entity';
import { Observable } from 'rxjs';
import { FavPet } from '../domain/fav-pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly URL_BASE = environment.api+"/";

  constructor(private _http : HttpClient) {}

  addPet(pet:FormData):Observable<any> {
    return this._http.post<any>(this.URL_BASE+'addPet', pet)
  }

  getPets():Observable<PetEntity[]> {
    return this._http.get<PetEntity[]>(this.URL_BASE+'getAllPets');
  }

  getPetsByCategory(category: string): Observable<PetEntity[]> {
    return this._http.get<PetEntity[]>(this.URL_BASE+'getPetsByCategory?category='+category);
  }

  getPetsByOwner(): Observable<PetEntity[]> {
    return this._http.get<PetEntity[]>(this.URL_BASE+'getPetsByOwner');
  }

  deletePetById(id: string): Observable<string> {
    return this._http.get<string>(this.URL_BASE+'deletePet/'+id);
  }

  getpetById(id: number): Observable<PetEntity> {
    return this._http.get<PetEntity>(this.URL_BASE+'getpetById/'+id);
  }

  getFavoritePets(): Observable<any> {
    return this._http.get<any>(this.URL_BASE+'getFavPets');
  }

  addpetToFavorites(id:string): Observable<any> {
    return this._http.get<any>(this.URL_BASE+'addPetToFav/'+id);
  }
}
