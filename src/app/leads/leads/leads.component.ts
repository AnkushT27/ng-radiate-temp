import { Component, OnInit,TemplateRef, AfterViewInit } from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit,AfterViewInit {
  
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: false
  };
  modalRef: BsModalRef;
  responses:any;
  response:any;
  leadTableOptions: DataTables.Settings = {};
  leadTableTrigger: Subject<any> = new Subject();
  
  constructor(private sidemenuservice : SideMenuService,private modalService : BsModalService) { 
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

  viewProject(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template,this.config)
   }
 
   closeModal(){
     this.modalRef.hide()
   }

   getLeads(){
    
    this.response = [
      {
        "name":"Uday Gupta",
        "mobile":"987654643131",
        "email":"test@abcsd.com",
        "assignedto":"Rishi bnasal",
        "status":"New",
        "ncd":"24/02/2020"
      },
      {
        "name":"Uday Gupta",
        "mobile":"987654643131",
        "email":"test@abcsd.com",
        "assignedto":"Rishi bnasal",
        "status":"New",
        "ncd":"24/02/2020"
      },
      {
        "name":"Uday Gupta",
        "mobile":"987654643131",
        "email":"test@abcsd.com",
        "assignedto":"Rishi bnasal",
        "status":"New",
        "ncd":"24/02/2020"
      }
    ]
   }

   getLead(index){
    this.response = this.responses[index];
   }

}
