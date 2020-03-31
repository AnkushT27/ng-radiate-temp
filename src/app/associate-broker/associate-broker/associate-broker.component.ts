import { Component, OnInit,AfterViewInit,TemplateRef } from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-associate-broker',
  templateUrl: './associate-broker.component.html',
  styleUrls: ['./associate-broker.component.css']
})
export class AssociateBrokerComponent implements OnInit,AfterViewInit {
  
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
  brokerTableTrigger: Subject<any> = new Subject();
  
  constructor(private sidemenuservice : SideMenuService,private modalService : BsModalService) { 
    this.sidemenuservice.changeNav({'menu':true});
    this.getBroker();
   this.brokerTableOptions = {
      searching:false,
      pagingType: 'full_numbers',
      lengthMenu: [[5, 10, 20, 50,-1],
      [5, 10, 20, 50,"All" ]]
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.brokerTableTrigger.next()
  }

  viewProject(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template,this.config)
   }
 
   closeModal(){
     this.modalRef.hide()
   }

   getBroker2(){
    
    this.response = [
      {
        "name":"Uday Gupta",
        "firmname":"LTI",
        "mobile":"987654643131",
        "email":"test@abcsd.com",
        "activeProjects":"Godrej Highnest",
       
      },
      {
        "name":"Uday Gupta",
        "firmname":"LTI",
        "mobile":"987654643131",
        "email":"test@abcsd.com",
        "activeProjects":"Godrej Highnest",
       
      },
      {
        "name":"Uday Gupta",
        "firmname":"LTI",
        "mobile":"987654643131",
        "email":"test@abcsd.com",
        "activeProjects":"Godrej Highnest",
       
      }
    ]
   }

   getBroker(){
    
    this.response = [
      {
        "name":"Ankush Gupta",
        "firmname":"LTI",
        "mobile":"987654643131",
        "email":"test@abcsd.com",
        "activeProjects":"Godrej Highnest",
      },
      {
        "name":"JAck Gupta",
        "firmname":"LTI",
        "mobile":"987654643131",
        "email":"test@abcsd.com",
        "activeProjects":"Godrej Highnest",
      },
      {
        "name":"Rohit Gupta",
        "firmname":"LTI",
        "mobile":"987654643131",
        "email":"test@abcsd.com",
        "activeProjects":"Godrej Highnest",
      }
    ]
   }

}

