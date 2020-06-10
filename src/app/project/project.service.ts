import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get(`${environment.baseURL}/projects`)
  }

 getProjectData():any{
   return   }

  addProject(payload){
    return this.http.post(`${environment.baseURL}/projects`,payload)
  }

  getProjectDetails(id){
    return this.http.get(`${environment.baseURL}/projects/${id}`)
  }

  getAssignedBrokers(){
    return this.http.get(`${environment.baseURL}/projects/activated_brokers`)
  }

  getAllBrokers(){
    return this.http.get(`${environment.baseURL}/projects/all_brokers`)
  }

  updateProject(payload){
    return this.http.post('',payload)
  }
}
