import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import { ProjectService } from '../project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SideMenuService } from '../../side-menu.service';
import {SharedService} from '../../shared/shared.service'
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects:any = [];
  viewProject:any;
 
  constructor(private route:Router,private sidemenuservice:SideMenuService, private shared:SharedService,private project:ProjectService) {
    this.sidemenuservice.changeNav({'menu':true});
    this.getProjects();
  }

  ngOnInit() {
  }

  goToAddProject(id){
    (id != 0)? 
    this.route.navigate([`/editproject/${id}`]):this.route.navigate(['/addproject'])
  }

  goToAssignBroker(value:String){
    this.sidemenuservice.changeValue(value)
    this.route.navigate([`/assign-broker`])
  }

  getProjects(){
    this.project.getProjects().subscribe(({radiate_projects_data}:any)=>{
       this.projects = radiate_projects_data;
    });
  }



  

}
