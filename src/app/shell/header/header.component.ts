import { Component, OnInit } from '@angular/core';
import { AppStorageService } from '../../core/services/common/app-storage.service';
import { environment } from '../../../environments/environment';
import { I18nService } from '../../core/services/common/i18n.service';
import { Logger } from '../../core/services/common/logger.service';

const log = new Logger('app-header');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedLanguage!: string;

  languages: string[] = environment.supportedLanguages;

  constructor(
    private appStorageService: AppStorageService,
    private i18nService: I18nService
  ) {}

  ngOnInit() {
    this.selectedLanguage = this.appStorageService.getSelectedLanguageCode();
  }

  onLanguageChanges() {
    log.debug(this.selectedLanguage);
    this.i18nService.language = this.selectedLanguage;
  }
}
