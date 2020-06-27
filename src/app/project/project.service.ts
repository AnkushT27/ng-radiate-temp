import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(page){
    return this.http.get(`${environment.baseURL}/projects?page=${page}`)
  }

 getProjectData():any{
   return   }

  addProject(payload,flag,id){
    return (flag && id!=0) ?  this.http.post(`${environment.baseURL}/projects/${id}`,payload) : this.http.post(`${environment.baseURL}/projects`,payload)
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
