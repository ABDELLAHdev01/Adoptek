import { Component, OnInit, inject } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { Store } from '@ngrx/store';
import * as PetActions from '../../state/pet/pet-action';
import { ToastrService } from 'ngx-toastr';
import { PetEntity } from 'src/app/domain/pet-entity';
import { Observable } from 'rxjs';
import { selectPetById } from 'src/app/state/pet/pet-selector';
import * as petselectot from 'src/app/state/pet/pet-selector';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about-animal',
  templateUrl: './about-animal.component.html',
  styleUrls: ['./about-animal.component.css']
})
export class AboutAnimalComponent implements OnInit  {

  p: number = 1;
  pets$!: Observable<any>;
  pet!:PetEntity;
  // get id from route

  private route = inject(ActivatedRoute)


  constructor(
    private store: Store<AppState>,
    private toastr: ToastrService
  ) {
    // get pet by id
    const number = Number(this.route.snapshot.paramMap.get('id'));

    this.store.dispatch(PetActions.getPetById({ id: number }));
    this.pets$ = this.store.select(petselectot.selectAllPets);
   
  }

  addToFav(id: string){
    this.store.dispatch(PetActions.addPetToFav({id}));
  }


  ngOnInit(): void {

  }
}
