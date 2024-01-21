import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Logger } from './core/services/common/logger.service';
import { I18nService } from './core/services/common/i18n.service';

const log = new Logger('App Component');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // private userSub: Subscription;

  title = 'skeleton-demo';

  constructor(private i18nService: I18nService) {}

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init app component');

    // this.userSub = this.authService.userSubject.subscribe((user) => {
    //   this.isAuthenticated = !!user;
    // });

    // Setup translations
    this.i18nService.init(environment.defaultLanguage);
  }
}
