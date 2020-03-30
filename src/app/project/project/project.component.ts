import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: false
  };
  modalRef: BsModalRef;
  constructor(private modalService : BsModalService) { }

  ngOnInit() {
  }

  showAddProject(template:TemplateRef<any>){
   this.modalRef = this.modalService.show(template,this.config)
  }

  closeModal(){
    this.modalRef.hide()
  }

}
