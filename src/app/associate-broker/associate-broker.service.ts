import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AssociateBrokerService {

  constructor(private http:HttpClient) { }

  getActiveBrokers(page){
   return this.http.get(`${environment.baseURL}/brokers?page=${page}`)
  }

  getBlacklistedBrokers(page){
    return this.http.get(`${environment.baseURL}/brokers/blacklisted?page=${page}`)
  }

  getProjectsForBrokers(page,id){
    return this.http.get(`${environment.baseURL}/brokers/${id}/broker_project?page=${page}`)
  }
}
