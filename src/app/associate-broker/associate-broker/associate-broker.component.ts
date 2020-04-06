import { Component, OnInit,AfterViewInit,TemplateRef } from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import { AssociateBrokerService } from '../associate-broker.service';
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
  response:any;
  brokerTableOptions: DataTables.Settings = {};
  brokerTableTriggerAll: Subject<any> = new Subject();
  brokerTableTriggerBlack: Subject<any> = new Subject();
  
  constructor(private sidemenuservice : SideMenuService,private modalService : BsModalService,private brokerService:AssociateBrokerService) { 
    this.sidemenuservice.changeNav({'menu':true});
    this.getActiveBroker();
   this.brokerTableOptions = {
      searching:false,
      pagingType: 'full_numbers',
      lengthMenu: [[5, 10, 20, 50,-1],
      [5, 10, 20, 50,"All" ]]
    };
  }

  ngOnInit() {
  }

  
  viewProject(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template,this.config)
   }
 
   closeModal(){
     this.modalRef.hide()
   }

   getActiveBroker(){
     this.response=[]
    this.brokerService.getActiveBrokers().subscribe((res:any)=>{
        this.response=res.radiate_p_brokers;
        $('#dataTablesAll').DataTable().destroy();
        this.brokerTableTriggerAll.next()

    })
  }

  getBlacklistedBroker(){
    this.response=[]
   this.brokerService.getBlacklistedBrokers().subscribe((res:any)=>{
       this.response=res.radiate_blacklisted_brokers;
       $('#dataTablesBlack').DataTable().destroy();
       this.brokerTableTriggerBlack.next()

   })
 }
    
}

