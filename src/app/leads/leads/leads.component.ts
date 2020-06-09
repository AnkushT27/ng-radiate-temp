import { Component, OnInit,TemplateRef, AfterViewInit } from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import { LeadsService } from '../leads.service';
import { DataTableDirective } from 'angular-datatables';


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
  dtElement: DataTableDirective;
 
  constructor(private sidemenuservice : SideMenuService,private modalService : BsModalService,private leadservice:LeadsService) {
    this.addClassesForBody();
    this.sidemenuservice.changeNav({'menu':true});
    this.getLeads();
    this.leadTableOptions = {
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

  viewProject(template:TemplateRef<any>,id){
    this.modalRef = this.modalService.show(template,this.config);
    this.getLead(id);
   }

   sendMailToLead(){
    const data = {
      projectID:this.leadIdArray,
      userId:localStorage.getItem('user_id')
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
