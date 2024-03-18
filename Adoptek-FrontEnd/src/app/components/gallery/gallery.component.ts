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
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit  {

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

    this.pets$ = this.store.select(petselectot.selectAllPets);
   
  }


  ngOnInit(): void {

  }
}
