import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as PetAction from '../../state/pet/pet-action'
import { PetEntity } from 'src/app/domain/pet-entity';
import { AppState } from 'src/app/state/app-state';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-body-img',
  templateUrl: './body-img.component.html',
  styleUrls: ['./body-img.component.css']
})
export class BodyImgComponent implements OnInit {
  pet!: PetEntity ;
  formAddPet!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private store : Store<AppState>) { }

  ngOnInit(): void {
    this.formAddPet = this.formBuilder.group({
      name: ['', Validators.required],
      petCategory: ['', Validators.required],
      description: ['', Validators.required],
      age: ['', Validators.required],
      breed: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      gender: ['', Validators.required],
      goodWith: ['', Validators.required],
      image: ['', Validators.required],
      location: ['', Validators.required],
      health: ['', Validators.required],
      aggressionLevel: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  addPet(){
    if (this.formAddPet.invalid) {
      return;
    }
    this.pet = this.formAddPet.value;
    this.store.dispatch(PetAction.addPet({pet: this.pet}));
    this.router.navigate(['/home']);
  }









  count: number = 0;

  addone(){
    this.count ++;
  }


}
