import { Component, OnInit,TemplateRef } from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: false
  };
  modalRef: BsModalRef;
 

  constructor(private sidemenuservice : SideMenuService,private modalService : BsModalService) { 
    this.sidemenuservice.changeNav({'menu':true})
  }

  ngOnInit() {
  }

  viewProject(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template,this.config)
   }
 
   closeModal(){
     this.modalRef.hide()
   }

}
