import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HelperUtilityService {
  constructor() {}

  // isFormValid(form: NgForm): boolean {
  //   for (let control in form.form.controls) {
  //     form.form.get(control).markAsTouched();
  //   }

  //   return form.valid;
  // }

  // asAny(item: any): any {
  //   return item;
  // }

  // validateIBAN(iban: string): boolean {
  //   // Validate length = 24
  //   if (iban.length !== 24) {
  //     // this.iBANErrorMessage = this.i18nService.getLocaleInstant(
  //     //   extract('shared.navbar.myAccountMenu.register.validation-length')
  //     // );
  //     return true;
  //   }

  //   // IBAN must consist entirely of characters a-z, A-Z, 0-9
  //   let pattern = new RegExp(/\W|_/);
  //   if (pattern.test(iban)) {
  //     // this.iBANErrorMessage = this.i18nService.getLocaleInstant(
  //     //   extract('shared.navbar.myAccountMenu.register.validation-iBAN-allChars-numbers')
  //     // );
  //     return true;
  //   }

  //   //First four characters must be letter-letter-digit-digit
  //   pattern = new RegExp(/^\D\D\d\d.+/);
  //   if (!pattern.test(iban)) {
  //     // this.iBANErrorMessage = this.i18nService.getLocaleInstant(
  //     //   extract('shared.navbar.myAccountMenu.register.validation-letter-letter-digit-digit')
  //     // );
  //     return true;
  //   }

  //   // Check digits cannot be 00, 01 or 99
  //   pattern = new RegExp(/^\D\D00.+|^\D\D01.+|^\D\D99.+/);
  //   if (pattern.test(iban)) {
  //     // this.iBANErrorMessage = this.i18nService.getLocaleInstant(
  //     //   extract('shared.navbar.myAccountMenu.register.validation-check-digits')
  //     // );
  //     return true;
  //   }

  //   // Validate country code first two letters must be sa (case insensitive)
  //   pattern = new RegExp(/^[S,s][A,a].+/);
  //   if (!pattern.test(iban)) {
  //     // this.iBANErrorMessage = this.i18nService.getLocaleInstant(
  //     //   extract('shared.navbar.myAccountMenu.register.validation-country-code')
  //     // );
  //     return true;
  //   }

  //   //skip first 4 then match 2 digits then match 18 chars and numbers
  //   pattern = new RegExp(/^.{4}\d{2}[A-Za-z0-9]{18}/);
  //   if (!pattern.test(iban)) {
  //     // this.iBANErrorMessage = this.i18nService.getLocaleInstant(
  //     //   extract('shared.navbar.myAccountMenu.register.validation-letter-letter-digit-digit')
  //     // );
  //     return true;
  //   }

  //   //apply equation
  //   var upperIBAN = iban.toUpperCase();

  //   var letter = new Array(
  //     'A',
  //     'B',
  //     'C',
  //     'D',
  //     'E',
  //     'F',
  //     'G',
  //     'H',
  //     'I',
  //     'J',
  //     'K',
  //     'L',
  //     'M',
  //     'N',
  //     'O',
  //     'P',
  //     'Q',
  //     'R',
  //     'S',
  //     'T',
  //     'U',
  //     'V',
  //     'W',
  //     'X',
  //     'Y',
  //     'Z'
  //   );

  //   var digits = new Array(
  //     '10',
  //     '11',
  //     '12',
  //     '13',
  //     '14',
  //     '15',
  //     '16',
  //     '17',
  //     '18',
  //     '19',
  //     '20',
  //     '21',
  //     '22',
  //     '23',
  //     '24',
  //     '25',
  //     '26',
  //     '27',
  //     '28',
  //     '29',
  //     '30',
  //     '31',
  //     '32',
  //     '33',
  //     '34',
  //     '35'
  //   );

  //   // Move country and check digits to the end
  //   upperIBAN = upperIBAN.substr(4, 20) + upperIBAN.substr(0, 4);

  //   //convert letters to digits
  //   for (var i = 0; i <= 25; i++) {
  //     while (upperIBAN.search(letter[i]) != -1) {
  //       upperIBAN = upperIBAN.replace(letter[i], digits[i]);
  //     }
  //   }

  //   // Calculate modulo 97 remainder
  //   var coss = Math.ceil(upperIBAN.length / 7);
  //   var rmndr = '';
  //   for (var i = 1; i <= coss; i++) {
  //     rmndr = String(parseFloat(rmndr + upperIBAN.substr((i - 1) * 7, 7)) % 97);
  //   }
  //   // Remainder must be 1
  //   if (rmndr != '1') {
  //     // this.iBANErrorMessage = this.i18nService.getLocaleInstant(
  //     //   extract('shared.navbar.myAccountMenu.register.validation-equation-res')
  //     // );
  //     return true;
  //   }
  //   return false;
  // }
}
