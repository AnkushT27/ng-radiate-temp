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

  updateProject(payload){
    return this.http.post('',payload)
  }
}
