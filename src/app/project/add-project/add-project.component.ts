import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SideMenuService } from '../../side-menu.service';
import {SharedService} from '../../shared/shared.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  addProjectForm:FormGroup
  editFlag: boolean;
  constructor(private sidemenuservice:SideMenuService, private shared:SharedService,private project:ProjectService,private route:ActivatedRoute) {
    this.sidemenuservice.changeNav({'menu':true});
    this.addProjectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      budgetFrom: new FormControl('', [Validators.required,Validators.pattern(this.shared.getValidator('budget'))]),
      budgetTo: new FormControl('', [Validators.required,Validators.pattern(this.shared.getValidator('budget'))]),
      possesion: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      knowledge: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      budgetFromUnit: new FormControl('Lc', [Validators.required]),
      budgetToUnit: new FormControl('Lc', [Validators.required]),
      });
     const id = this.route.snapshot.paramMap.get('id')
     if(id){
       this.editFlag = true;
       this.showProject(id)
     }
   }

  ngOnInit() {
  }

  addProjectData(addprojectForm:FormGroup){
    console.log(this.addProjectForm.value)
    var projectpayload={
      "title":addprojectForm.value.name,
      "description":"No description",
      "other_info": "No other info",
      "website":addprojectForm.value.website,
      "status_id":addprojectForm.value.status,
      "budget_from":addprojectForm.value.budgetFrom,
      "budget_upto":addprojectForm.value.budgetTo,
      "builder_id":localStorage.getItem('user_id'),
      "locality_id":"0",
    }
     this.project.addProject(projectpayload).subscribe((res:any)=>{
       console.log(res)
    });
  }

  showProject(id){
    this.project.getProjectDetails(id).subscribe((res:any)=>{
   
    },(error)=>{
      this.addProjectForm.controls['name'].setValue('test');
      this.addProjectForm.controls['location'].setValue('test');
      this.addProjectForm.controls['budgetFrom'].setValue(1);
      this.addProjectForm.controls['budgetTo'].setValue(2);
      this.addProjectForm.controls['possesion'].setValue('test');
      this.addProjectForm.controls['website'].setValue('test');
      this.addProjectForm.controls['knowledge'].setValue('test');
      this.addProjectForm.controls['status'].setValue('test');
    });
  }

  updateProjectData(addprojectForm:FormGroup){
    console.log('in update',this.addProjectForm.value)
  }

}
