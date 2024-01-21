import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppStorageService } from './app-storage.service';

export const enum Directions {
  rtl = 'rtl',
  ltr = 'ltr',
}

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private defaultLanguage!: string;
  private langChangeSubscription!: Subscription;

  onDirectionChange!: Function;

  direction: string = Directions.ltr;

  constructor(
    private translate: TranslateService,
    private storageService: AppStorageService
  ) {}

  init(defaultLanguage: string) {
    this.defaultLanguage = defaultLanguage;

    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang(this.defaultLanguage);

    this.language =
      this.storageService.getSelectedLanguageCode() ||
      this.getBrowserLanguage();

    this.checkLayoutDirection(this.translate.currentLang);

    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.storageService.setSelectedLanguageCode(event.lang);
        this.translate.use(event.lang);
        this.checkLayoutDirection(event.lang);
      }
    );
  }

  private getBrowserLanguage(): string {
    const browserLang = this.translate.getBrowserLang();

    return browserLang?.match(/en|ar/) ? browserLang : this.defaultLanguage;
  }

  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  set language(newLanguage: string) {
    newLanguage =
      newLanguage ||
      this.storageService.getSelectedLanguageCode() ||
      this.getBrowserLanguage();

    //console.debug(`Language set to ${newLanguage}`);

    this.translate.use(newLanguage);
  }

  get language(): string {
    return this.translate.currentLang;
  }

  getLocaleInstant(key: string, interpolateParams?: Object) {
    return this.translate.instant(key, interpolateParams);
  }

  get(key: string | string[]) {
    return this.translate.get(key);
  }

  checkLayoutDirection(selectedLang: string) {
    const direction =
      selectedLang.toLowerCase() === 'ar' ? Directions.rtl : Directions.ltr;

    if (direction !== this.direction) {
      if (this.onDirectionChange)
        this.onDirectionChange(this.direction, direction);

      this.direction = direction;
    }
  }
}
