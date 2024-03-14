import { Component, OnInit } from '@angular/core';
import { PetEntity } from 'src/app/domain/pet-entity';
import * as PetAction from 'src/app/state/pet/pet-action'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state'; 
import { Observable } from 'rxjs';
import { Route } from '@angular/router';


@Component({
  selector: 'app-petcards',
  templateUrl: './petcards.component.html',
  styleUrls: ['./petcards.component.css']
})
export class PetcardsComponent implements OnInit{

  pets$!: Observable<PetEntity[]>;
  

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(PetAction.getPets());
    this.pets$ = this.store.select(store => store.pets);
    console.log(this.pets$);
    

    
      
      
  }

  petDetails(pet: PetEntity) {
    console.log(pet);
  }

  petEdit(pet: PetEntity) {
    console.log(pet);
  }

  petDelete(pet: PetEntity) {
    console.log(pet);
  }
  


}
