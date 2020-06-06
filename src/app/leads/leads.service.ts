import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  constructor(private http: HttpClient) { }

  leads(searchString){
    return searchString!=''?  this.http.get(`${environment.baseURL}/leads?search=${searchString}`):
     this.http.get(`${environment.baseURL}/leads`);
  }

  getEachLead(id){
    return this.http.get(`${environment.baseURL}/leads/${id}`)
  }

  sendMail(data){
    return this.http.post(`${environment.baseURL}/leads`,data)
  }
}
