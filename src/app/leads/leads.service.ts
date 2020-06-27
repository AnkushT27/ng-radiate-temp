import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  constructor(private http: HttpClient) { }

  leads(searchString,page){
    return searchString!=''?  this.http.get(`${environment.baseURL}/leads?search=${searchString}&page=${page}`):
     this.http.get(`${environment.baseURL}/leads?page=${page}`);
  }

  getEachLead(id){
    return this.http.get(`${environment.baseURL}/leads/${id}`)
  }

  sendMail(data){
    return this.http.post(`${environment.baseURL}/leads/send_project_information`,data)
  }

  deleteLead(id){
     return this.http.delete(`${environment.baseURL}/leads/${id}`)
  }
}
