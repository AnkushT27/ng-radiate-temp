import { Component, OnInit,AfterViewInit,TemplateRef } from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import { AssociateBrokerService } from '../associate-broker.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-associate-broker',
  templateUrl: './associate-broker.component.html',
  styleUrls: ['./associate-broker.component.css']
})
export class AssociateBrokerComponent implements OnInit {
  
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: false
  };
  modalRef: BsModalRef;
  responses:any;
  responseAllBroker:any = [];
  responseBlackListedBroker:any = [];
  brokerTableOptions: DataTables.Settings = {};
  brokerTableTriggerAll: Subject<any> = new Subject();
  brokerTableTriggerBlack: Subject<any> = new Subject();
  totalCount:number;
  currentPage:number = 1;
  constructor(private route:Router,private sidemenuservice : SideMenuService,private modalService : BsModalService,private brokerService:AssociateBrokerService) { 
    this.sidemenuservice.changeNav({'menu':true});
   this.brokerTableOptions = {
      paging:false,
      searching:false,
      pagingType: 'full_numbers',
      lengthMenu: [[5, 10, 20, 50,-1],
      [5, 10, 20, 50,"All" ]]
    };
  }

  ngOnInit() {
    this.getActiveBroker(this.currentPage)
  }

  
  viewProject(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template,this.config)
   }
 
   closeModal(){
     this.modalRef.hide()
   }

   getActiveBroker(page){
     this.responseAllBroker=[]
     $('#dataTablesAll').DataTable().destroy();
    this.brokerService.getActiveBrokers(page).subscribe(({radiate_p_brokers,total_count}:any)=>{
       this.responseAllBroker=radiate_p_brokers;
       this.totalCount = total_count;
       this.brokerTableTriggerAll.next()

    })
  }

  getBlacklistedBroker(page){
    this.responseBlackListedBroker=[];
    $('#dataTablesBlack').DataTable().destroy();
   this.brokerService.getBlacklistedBrokers(page).subscribe(({radiate_blacklisted_brokers,total_count}:any)=>{
       this.responseBlackListedBroker=radiate_blacklisted_brokers;
       this.totalCount = total_count
       this.brokerTableTriggerBlack.next()

   })
 }

 blackListBroker(){

 }

 goToActiveProjects(id){
    this.route.navigate([`/projects/${id}`])
 }
    
}

