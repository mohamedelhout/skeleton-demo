import { Injectable, Inject } from '@angular/core';
import {
  SESSION_STORAGE,
  WebStorageService,
  LOCAL_STORAGE,
  StorageTranscoders,
} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class AppStorageService {
  constructor(
    @Inject(SESSION_STORAGE) private sessionStorage: WebStorageService,
    @Inject(LOCAL_STORAGE) private localStorage: WebStorageService
  ) {}

  getUserToken() {
    return this.localStorage.get('token');
  }

  removeUserToken() {
    this.localStorage.remove('token');
  }

  setUserToken(token: string) {
    return this.localStorage.set('token', token);
  }

  getSelectedLanguageCode() {
    return this.localStorage.get(
      'selected-language',
      StorageTranscoders.STRING
    );
  }

  setSelectedLanguageCode(language: string) {
    this.localStorage.set(
      'selected-language',
      language,
      StorageTranscoders.STRING
    );
  }
}
