import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AssociateBrokerService {

  constructor(private http:HttpClient) { }

  getActiveBrokers(){
   return this.http.get(`${environment.baseURL}/brokers`)
  }

  getBlacklistedBrokers(){
    return this.http.get(`${environment.baseURL}/brokers/blacklisted`)
  }
}
