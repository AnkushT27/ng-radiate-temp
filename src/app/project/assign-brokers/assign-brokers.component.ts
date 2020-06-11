import { Component, OnInit ,TemplateRef} from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import { ProjectService } from '../project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-assign-brokers',
  templateUrl: './assign-brokers.component.html',
  styleUrls: ['./assign-brokers.component.css']
})
export class AssignBrokersComponent implements OnInit {
 
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };
  modalRef: BsModalRef;
  responses:any;
  response:any;
  brokerTableOptions: DataTables.Settings = {};
  brokerTableTriggerAll: Subject<any> = new Subject();
  brokerTableTriggerBlack: Subject<any> = new Subject();
  editBrokerForm: FormGroup;
  projectTitle:string;
  constructor(private sidemenuservice : SideMenuService,private modalService : BsModalService,private projectService:ProjectService,private shared : SharedService) { 
    this.sidemenuservice.changeNav({'menu':true});
    this.getAssignedBroker();
    this.projectTitle = this.shared.getSharedVariable();
    this.editBrokerForm = new FormGroup({
      status: new FormControl('', [Validators.required]),
      ncd: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
    });
   this.brokerTableOptions = {
      searching:false,
      pagingType: 'full_numbers',
      lengthMenu: [[5, 10, 20, 50,-1],
      [5, 10, 20, 50,"All" ]]
    };
  }

  ngOnInit() {
  }

  assignBroker(){
    
    console.log(this.editBrokerForm.value)
  }
  
  openBrokerDetails(template:TemplateRef<any>,id:any){
    this.getBrokerDetails(id)
    this.modalRef = this.modalService.show(template,this.config)
    
   }
 
   closeModal(){
     this.modalRef.hide()
   }

   getAssignedBroker(){
     this.response=[]
    this.projectService.getAssignedBrokers().subscribe((res:any)=>{
        this.response=res.radiate_p_brokers;
        $('#dataTablesAll').DataTable().destroy();
        this.brokerTableTriggerAll.next()

    })
  }

  getBrokerDetails(id:any){
    
  }

  getAllBrokers(){
    this.response=[]
   this.projectService.getAllBrokers().subscribe((res:any)=>{
       this.response=res.radiate_blacklisted_brokers;
       $('#dataTablesBlack').DataTable().destroy();
       this.brokerTableTriggerBlack.next()

   })
 }
}
