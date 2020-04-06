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
  showData:boolean =false;
  modalRef: BsModalRef;
  responses:any=[];
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

  viewProject(template:TemplateRef<any>,id){
    this.modalRef = this.modalService.show(template,this.config);
    this.getLead(id);
   }
 
   closeModal(){
     this.modalRef.hide()
   }

   getLeads(){
    this.responses=[];
     this.leadservice.leads(this.searchString).subscribe((res:any)=>{
       this.responses = res.radiate_b_leads;
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
