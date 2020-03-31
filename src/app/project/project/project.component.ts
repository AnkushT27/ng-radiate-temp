import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import { ProjectService } from '../project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SideMenuService } from '../../side-menu.service';
import {SharedService} from '../../shared/shared.service'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects:any = [];
  addProjectForm:FormGroup
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: false
  };
  modalRef: BsModalRef;
  constructor(private sidemenuservice:SideMenuService, private shared:SharedService,private modalService : BsModalService,private project:ProjectService) {
    this.sidemenuservice.changeNav({'menu':true});
    this.getProjects();
    this.addProjectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      possesion: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      knowledge: new FormControl('', [Validators.required]),
      });
   }

  ngOnInit() {
  }

  showAddProject(template:TemplateRef<any>){
   this.modalRef = this.modalService.show(template,this.config)
  }

  closeModal(){
    this.modalRef.hide()
  }

  getProjects(){
    this.project.getProjects().subscribe((res:any)=>{
       console.log(res)
    });
  }

  addProject(addprojectForm:FormGroup){
    this.project.addProject(addprojectForm.value).subscribe((res:any)=>{
       console.log(res)
    });
  }

}
