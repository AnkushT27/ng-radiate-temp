import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  validators:any
  constructor() {
    this.validators= {
      'emailRegex':'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$',
      'phoneRegex':'/^([+]\d{2})?\d{10}$/'
    }
   }

   getValidator(value){
     return this.validators[value];
   }
}
