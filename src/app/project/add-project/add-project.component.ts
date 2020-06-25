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
  projectTitle:String;
  locality:String;
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
      radiate_project:{
      "title":addprojectForm.value.name,
      "description":"No description",
      "other_info": "No other info",
      "website":addprojectForm.value.website,
      "status_id":addprojectForm.value.status,
      "budget_from":addprojectForm.value.budgetFrom+addprojectForm.value.budgetFromUnit,
      "budget_upto":addprojectForm.value.budgetTo+addprojectForm.value.budgetToUnit,
      "builder_id":localStorage.getItem('user_id'),
      "locality_id":"0",
      }
    }
     this.project.addProject(projectpayload).subscribe((res:any)=>{
       console.log(res)
    });
  }

  showProject(id){
    this.project.getProjectDetails(id).subscribe((res:any)=>{
      this.projectTitle = res.title;
      this.locality = res.locality;
      this.addProjectForm.controls['name'].setValue(res.title);
      this.addProjectForm.controls['location'].setValue(res.locality);
      this.addProjectForm.controls['budgetFrom'].setValue(res.budget_from);
      this.addProjectForm.controls['budgetTo'].setValue(res.budget_upto);
      this.addProjectForm.controls['possesion'].setValue(res.posession_year);
      this.addProjectForm.controls['website'].setValue(res.website);
      this.addProjectForm.controls['knowledge'].setValue(res.knowledge_center);
      this.addProjectForm.controls['status'].setValue(res.status);
    });
    
   
  }

  updateProjectData(addprojectForm:FormGroup){
    console.log('in update',this.addProjectForm.value)
  }

}
