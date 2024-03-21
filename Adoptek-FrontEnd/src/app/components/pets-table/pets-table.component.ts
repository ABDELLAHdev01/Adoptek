import { Component, OnInit } from '@angular/core';
import { PetEntity } from 'src/app/domain/pet-entity';
import * as PetAction from 'src/app/state/pet/pet-action'
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state'; 
import { Observable } from 'rxjs';
import * as petselectot from 'src/app/state/pet/pet-selector';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.css']
})
export class PetsTableComponent implements OnInit{

  p: number = 1;

  pets$!: Observable<PetEntity[]>;
  pets:any;

  constructor(private store: Store<AppState>
    , private toastr: ToastrService) {
    
  }

  
  deletePet(id: any){
    this.store.dispatch(PetAction.deletePetById({id}));
    
  }
  ngOnInit(): void {
    // clean cache
    this.store.dispatch(PetAction.getPets());
    this.pets$ = this.store.select(petselectot.selectAllPets);
    this.pets$.subscribe((pets: any) => {
      this.pets = pets;
      console.log(pets);
      
    } );

    
    
    

  }}
