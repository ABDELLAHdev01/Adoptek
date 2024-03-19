import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterSService {
  constructor(private toast: ToastrService) { }

  fail(message: string, title: string){
    this.toast.error(message, title);
  }

}
