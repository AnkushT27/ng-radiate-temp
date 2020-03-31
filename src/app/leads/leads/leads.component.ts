import { Component, OnInit,TemplateRef, AfterViewInit } from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import { LeadsService } from '../leads.service';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit,AfterViewInit {
  searchString:string = '';
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: false
  };
  modalRef: BsModalRef;
  responses:any=[];
  response:any;
  leadTableOptions: DataTables.Settings = {};
  leadTableTrigger: Subject<any> = new Subject();
  
  constructor(private sidemenuservice : SideMenuService,private modalService : BsModalService,private leadservice:LeadsService) { 
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

  ngAfterViewInit(): void {
    this.leadTableTrigger.next()
  }

  viewProject(template:TemplateRef<any>,id){
    this.modalRef = this.modalService.show(template,this.config);
    this.getLead(id);
   }
 
   closeModal(){
     this.modalRef.hide()
   }

   getLeads(){
    this.leadservice.leads(this.searchString).subscribe((res:any)=>{
        this.responses = res.radiate_b_leads;
     })
   }

   getLead(index){
    this.leadservice.getEachLead(index).subscribe((res:any)=>{
      this.response = res
    })
   }

}
