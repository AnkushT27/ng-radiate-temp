import { Component, OnInit,TemplateRef, AfterViewInit } from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import { LeadsService } from '../leads.service';
import { DataTableDirective } from 'angular-datatables';
import { ProjectService } from 'src/app/project/project.service';


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  searchString:string = '';
 config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: false
  };
  universalChecked:boolean =false;
  singleChecked:boolean =false;
  showData:boolean =false;
  modalRef: BsModalRef;
  responses:any=[];
  leadIdArray:any = [];  
  response:any;
  leadTableOptions: DataTables.Settings = {};
  leadTableTrigger: Subject<any> = new Subject();
  projectListTableOptions: DataTables.Settings = {};
  projectListTableTrigger: Subject<any> = new Subject();
  dtElement: DataTableDirective;
  projectIdArray: any = [];
  universalCheckedProject: boolean;
  projects: any = [];
 
  constructor(private sidemenuservice : SideMenuService,private modalService : BsModalService,private leadservice:LeadsService,private projectService:ProjectService) {
    //this.addClassesForBody();
    this.sidemenuservice.changeNav({'menu':true});
    this.getLeads();
    this.leadTableOptions = {
      searching:false,
      pagingType: 'full_numbers',
      lengthMenu: [[5, 10, 20, 50,-1],
      [5, 10, 20, 50,"All" ]]
    };
    this.projectListTableOptions = { 
      searching:false,
      pagingType: 'full_numbers',
      lengthMenu: [[5, 10, 20, 50,-1],
      [5, 10, 20, 50,"All" ]]
    };
    
  }

  ngOnInit() {
 
  }
  pushAllLeadID(event){
    this.singleChecked = this.universalChecked;
    this.leadIdArray = [];
    if(event.target.checked){
     
      this.responses.map((data)=>{
        this.leadIdArray.push(data.id);
      })
    }
    else{
      this.leadIdArray = []
    }
    console.log('lead',this.leadIdArray)
  }
 

  viewProjectList(template:TemplateRef<any>,id){
    this.getProjects();
    this.modalRef = this.modalService.show(template,this.config);
   
   }
   viewProjectData(template:TemplateRef<any>,id){
    this.getLead(id);
    this.modalRef = this.modalService.show(template,this.config);
   
   }

   getProjects(){
    this.projects = [];
    this.projectService.getProjects().subscribe(({radiate_projects_data}:any)=>{
      this.projects = radiate_projects_data;
      $('#DataTables-Project').DataTable().destroy();
      this.projectListTableTrigger.next();
   });
   }

   sendMailToLead(){
    const data = {
      lead_ids:this.leadIdArray,
      user_id:localStorage.getItem('user_id')
    }
    this.leadservice.sendMail(data
     ).subscribe((res:any)=>{
       console.log('res',res);
   })
  }

  sendBulkMailToLead(){
    const data = {
      project_ids:this.projectIdArray,
      lead_ids:this.leadIdArray,
      user_id:localStorage.getItem('user_id')
    }
    this.leadservice.sendMail(data
     ).subscribe((res:any)=>{
       console.log('res',res);
   })
  }


   pushLeadID(id:string){
     this.universalChecked =false;
    if(this.leadIdArray.length == 0){
   this.leadIdArray.push(id)
    }
    else
    {
   let idPresent =  this.leadIdArray.findIndex((data)=>data == id)
    idPresent!=-1 ? this.leadIdArray.splice(idPresent,1):this.leadIdArray.push(id);
   }
  console.log(this.leadIdArray)
  }

  pushProjectID(id:string){
  if(this.projectIdArray.length == 0){
  this.projectIdArray.push(id)
   }
   else
   {
  let idPresent =  this.projectIdArray.findIndex((data)=>data == id)
   idPresent!=-1 ? this.projectIdArray.splice(idPresent,1):this.projectIdArray.push(id);
  }
   console.log(this.projectIdArray)
   }

  isLeadPresent(id:String){
   if(this.leadIdArray.length == 0){
     return false;
   }
   else{
    const flag = this.leadIdArray.find((data)=>data === id)
    return flag;
  }
  }
 
   closeModal(){
     this.modalRef.hide()
   }

  getLeads(){
    this.responses=[];
     this.leadservice.leads(this.searchString).subscribe(({radiate_b_leads}:any)=>{
     this.responses = radiate_b_leads;
     $('#DataTables').DataTable().destroy();
     this.leadTableTrigger.next();
     })
  }

   getLead(index){
    this.leadservice.getEachLead(index).subscribe((res:any)=>{
      this.response = res
    })
    
   }

  addClassesForBody(){
     $('body').addClass('cbp-spmenu-push');
     $('body').addClass('cbp-spmenu-push-toright');
   }

   
}
