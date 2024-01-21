import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AppStorageService } from '../services/common/app-storage.service';
import { Logger } from '../services/common/logger.service';

import { AuthenticationService } from './authentication.service';

const log = new Logger('Authentication Guard');

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private appStorageService: AppStorageService
  ) // private toastrService: ToastrService
  {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    const userToken = this.appStorageService.getUserToken();
    if (userToken) {
      // this.toastrService.info(
      //   'انتهت سيشن التسجيل .. من فضلك سجل دخولك مرة اخرى',
      //   'معلومة'
      // );
      this.authService.logout();
    }

    log.debug('Not authenticated, redirecting and adding redirect url...');

    this.router.navigate(['/login'], {
      queryParams: { redirect: state.url },
      replaceUrl: true,
    });

    return false;
  }
}
