import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../project/project.service';
import {Subject} from 'rxjs';
import { LeadsService } from '../leads.service';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects:any = [];
  isChecked:boolean =false;
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: false
  };
  projectIdArray:any = [];  
  projectListTableOptions: DataTables.Settings = {};
  projectListTableTrigger: Subject<any> = new Subject();
  constructor(private projectService : ProjectService,private leadservice:LeadsService) {
    this.projectListTableOptions = {
      searching:false,
      pagingType: 'full_numbers',
      lengthMenu: [[5, 10, 20, 50,-1],
      [5, 10, 20, 50,"All" ]]
    };
     this.getProjects();


   }

   pushProjectID(id:string,e){
     if(this.projectIdArray.length == 0){
    this.projectIdArray.push(id)
     }
     else{
    let idPresent =  this.projectIdArray.findIndex((data)=>data == id)
    console.log('idPresent',idPresent)
    idPresent!=-1 ? this.projectIdArray.splice(idPresent,1):this.projectIdArray.push(id);
  }
  console.log(this.projectIdArray)
  }

  sendMail(){
    const data = {
      projectID:this.projectIdArray,
      userId:localStorage.getItem('user_id')
    }
    this.leadservice.sendMail(data
     ).subscribe((res:any)=>{
       console.log('res',res);
   })
  }


   getProjects(){
   
   this.projectService.getProjects().subscribe((res)=>{
      console.log('res',res)
     
   },(error)=>{
    this.projects = [{
      id:'1',
      name:'Godrej',
      location:'Mumbai'
  
    },
    {
      id:'2',
      name:'Runwal--22',
      location:'Mumbai'
  
    }
  ]  
  
    $('#DataTablesProject').DataTable().destroy();
   this.projectListTableTrigger.next();

   })
 }
  ngOnInit() {
  }

}
