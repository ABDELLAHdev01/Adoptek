import { Component } from '@angular/core';

@Component({
  selector: 'app-body-img',
  templateUrl: './body-img.component.html',
  styleUrls: ['./body-img.component.css']
})
export class BodyImgComponent {

  count: number = 0;

  addone(){
    this.count ++;
  }


}
