import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../project/project.service';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects:any = [];
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: false
  };
  projectIdArray:any= [];  
  projectListTableOptions: DataTables.Settings = {};
  projectListTableTrigger: Subject<any> = new Subject();
  constructor(private projectService : ProjectService) {
    this.projectListTableOptions = {
      searching:false,
      pagingType: 'full_numbers',
      lengthMenu: [[5, 10, 20, 50,-1],
      [5, 10, 20, 50,"All" ]]
    };
     this.getProjects();


   }

   pushProjectID(id:String){
    const idPresent = this.projectIdArray.find((data,index)=>{
      if(data.id === id){
        return index;
       }
       else{
         return 0;
       }
    })
    idPresent!=0 ? this.projectIdArray.splice(idPresent,1):this.projectIdArray.push(id);
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
