import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as PetAction from '../../state/pet/pet-action'
import { PetEntity } from 'src/app/domain/pet-entity';
import { AppState } from 'src/app/state/app-state';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-body-img',
  templateUrl: './body-img.component.html',
  styleUrls: ['./body-img.component.css']
})
export class BodyImgComponent implements OnInit {
  pet!: PetEntity ;
  formAddPet!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private store : Store<AppState>,
    private toastr: ToastrService
    ) { }

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
      image: [''],
      location: ['', Validators.required],
      health: ['', Validators.required],
      aggressionLevel: ['', Validators.required],
      color: ['', Validators.required]
    });
  }
  selectedFile: File | null = null; // Add this line

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  addPet() {
    if (this.formAddPet.valid) {
      const formData = new FormData();
      for (const key in this.formAddPet.value) {
        if (this.formAddPet.value.hasOwnProperty(key)) {
          if (key === 'image' && this.selectedFile) {
            // append file to form data
            formData.append(key, this.selectedFile, this.selectedFile.name);
          } else {
            formData.append(key, this.formAddPet.value[key]);
          }
        }
      }

      // dispatch action with form data instead of form value
      console.log(formData);
      this.store.dispatch(PetAction.addPet({pet: formData}));
    }
  }








  count: number = 0;

  addone(){
    this.count ++;
  }


}
