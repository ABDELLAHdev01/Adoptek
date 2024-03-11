import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  SearchForm: FormGroup;
  constructor(
    private router : Router,
    private formBuilder: FormBuilder
    ) { 
      this.SearchForm = formBuilder.group({ 
        search: new FormControl('', [Validators.required])
      });
    }

  onSubmite(){
    this.router.navigate(['/search']);
  }

}
