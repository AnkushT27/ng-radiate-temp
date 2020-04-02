import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  validators:any
  constructor(private http:HttpClient) {
    this.validators= {
      'emailRegex':'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$',
      'phoneRegex':'/^([+]\d{2})?\d{10}$/'
    }
   }

   getValidator(value){
     return this.validators[value];
   }

   logout(){
    return this.http.delete(`${environment.baseURL}/logout`)
  }
}
