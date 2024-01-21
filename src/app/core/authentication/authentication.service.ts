import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
// import { UserLoginRequest } from 'src/app/modules/users/models/login/login-request-model';
// import { UserLoginResponse } from 'src/app/modules/users/models/login/login-response-model';
// import { UsersService } from 'src/app/modules/users/services/http/users.service';
import { AppStorageService } from '../services/common/app-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CurrentUserModel } from '../models/user/current-user.model';
import { map } from 'rxjs/operators';

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  jwtHelper: JwtHelperService;

  constructor(
    // private userService: UsersService,
    // private toastr: ToastrService,
    private appStorage: AppStorageService
  ) {
    this.jwtHelper = new JwtHelperService();
  }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  // login(
  //   email: string,
  //   password: string,
  //   remember: boolean
  // ): Observable<UserLoginResponse> {
  //   const request: UserLoginRequest = {
  //     email: email,
  //     password: password,
  //     rememberMe: remember,
  //   };

  //   return this.userService
  //     .login(request)
  //     .pipe(map(this.loginCallback.bind(this)));
  // }

  // loginCallback(response: UserLoginResponse) {
  //   if (!response || !response.token) {
  //     this.toastr.error('حدث مشكلة اثناء التسجيل .. من فضلك حاول مرة اخري');
  //     return response;
  //   }

  //   this.appStorage.setUserToken(response.token);

  //   return response;
  // }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout() {
    this.appStorage.removeUserToken();

    // this.pubSub.$pub(LOGOUT_DONE);
  }

  isAuthenticated(): boolean {
    let token = this.appStorage.getUserToken();

    return (
      token &&
      !this.jwtHelper.isTokenExpired(token) &&
      this.jwtHelper.decodeToken(token).UserId
    );
  }

  getCurrentUserDetails(): CurrentUserModel | null {
    let token = this.appStorage.getUserToken();

    if (!token || this.jwtHelper.isTokenExpired(token)) {
      return null;
    }

    let currentUser = this.jwtHelper.decodeToken(token);

    return {
      userId: currentUser.UserId,
      email: currentUser.Email,
      fullName: currentUser.FullName,
    };
  }
}
