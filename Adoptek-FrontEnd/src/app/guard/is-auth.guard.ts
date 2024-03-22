import { CanActivateFn } from '@angular/router';
import { ToasterSService } from '../service/toaster-s.service';
import { ToastrService } from 'ngx-toastr';

export const isAuthGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
};
