import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoghelperService {

  constructor() {
   }

   log( value: unknown) {
     console.log (this.convert (value));
   }

   convert(value: unknown): string {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (Array.isArray(value)) {
       let result = '';
       value.every (v => result = result + ' ' + this.convert (v));
    }
    return String(value);
  }
}
