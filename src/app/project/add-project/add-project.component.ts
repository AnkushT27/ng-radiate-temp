import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SideMenuService } from '../../side-menu.service';
import {SharedService} from '../../shared/shared.service'
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  addProjectForm:FormGroup
  constructor(private sidemenuservice:SideMenuService, private shared:SharedService,private project:ProjectService) {
    this.sidemenuservice.changeNav({'menu':true});
    this.addProjectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      budgetFrom: new FormControl('', [Validators.required]),
      budgetTo: new FormControl('', [Validators.required]),
      possesion: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      knowledge: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
      });
   }

  ngOnInit() {
  }

  addProjectData(addprojectForm:FormGroup){
    var projectpayload={
      "title":addprojectForm.value.title,
      "description":addprojectForm.value.description,
      "other_info": addprojectForm.value.other_info,
      "website":addprojectForm.value.website,
      "status_id":addprojectForm.value.status_id,
      "budget_from":addprojectForm.value.budget_from,
      "budget_upto":addprojectForm.value.budget_upto,
      "builder_id":addprojectForm.value.builder_id,
      "locality_id":addprojectForm.value.locality_id,
    }
     this.project.addProject(projectpayload).subscribe((res:any)=>{
       console.log(res)
    });
  }

  showProject(id){
    this.project.getProjectDetails(id).subscribe((res:any)=>{
      console.log(res)
    });
  }

}
