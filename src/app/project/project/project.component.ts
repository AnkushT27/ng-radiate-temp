import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import { ProjectService } from '../project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SideMenuService } from '../../side-menu.service';
import {SharedService} from '../../shared/shared.service'
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AssociateBrokerService } from 'src/app/associate-broker/associate-broker.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects:any = [];
  viewProject:any;
  totalCount:number;
  currentPage:number = 1;
  filterForm:FormGroup;
  brokers:Array<Object> = [];
  selectedBroker :Object = {};
  brokerId:string;
  constructor(private route:Router,private router:ActivatedRoute,private sidemenuservice:SideMenuService, private broker:AssociateBrokerService,private project:ProjectService) {
    this.sidemenuservice.changeNav({'menu':true});
    this.filterForm = new FormGroup({
      location: new FormControl('', [Validators.required]),
      budgetFrom: new FormControl('', [Validators.required]),
      budgetTo: new FormControl('', [Validators.required]),
      posession: new FormControl('', [Validators.required]),
      broker: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
     });
     this.brokerId = this.router.snapshot.paramMap.get('id')
     this.brokers = [{id:1,text:"Ankush"},{id:2,text:"Manish"},{id:3,text:"Sushant"}]
  }

  ngOnInit() {
    this.brokerId ? this.getProjectsForBrokers(this.currentPage):
    this.getProjects(this.currentPage);
  }

  goToAddProject(id){
    (id != 0)? 
    this.route.navigate([`/editproject/${id}`]):this.route.navigate(['/addproject'])
  }

  goToAssignBroker(value:String){
    this.sidemenuservice.changeValue(value)
    this.route.navigate([`/assign-broker`])
  }

  getProjects(page){
    this.project.getProjects(page).subscribe(({radiate_projects_data,total_count}:any)=>{
       this.projects = radiate_projects_data;
       this.totalCount = total_count;
    });
  }
  
  getProjectsForBrokers(page){
     this.broker.getProjectsForBrokers(page,this.brokerId).subscribe(({broker_name:{broker_name},data:{radiate_projects_data,total_count}}:any)=>{
        this.filterForm.controls['broker'].setValue(broker_name);
        this.project = radiate_projects_data;
        this.totalCount = total_count;
     })
  }

  applyFilter(){

  }

  openApplyFilters(){
    
  }

  clearFilters(){
    this.filterForm.reset();
  }
  
  selected(event){
   this.selectedBroker = event;
   console.log('selected Brokers',this.selectedBroker,event)
  }

}
