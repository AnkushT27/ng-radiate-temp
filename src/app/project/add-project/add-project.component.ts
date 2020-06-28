import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SideMenuService } from '../../side-menu.service';
import {SharedService} from '../../shared/shared.service'
import { ActivatedRoute, Router } from '@angular/router';
import { OwlDateTimeComponent, DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE, OwlDateTimeFormats } from 'ng-pick-datetime';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';
const moment = (_moment as any).default ? (_moment as any).default : _moment;
export const MY_MOMENT_DATE_TIME_FORMATS: OwlDateTimeFormats = {
  parseInput: 'MM/YYYY',
  fullPickerInput: 'l LT',
  datePickerInput: 'MM/YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers:[
    {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_DATE_TIME_FORMATS},
  ]
})
export class AddProjectComponent implements OnInit {
  addProjectForm:FormGroup
  editFlag: boolean;
  projectTitle:String;
  locality:String;
  updateFlag: boolean;
  id: any;
  budgetFrom = {
   budget:0,
   unit:''
  }
  budgetTo = {
    budget:0,
    unit:''
   }
   public date = new FormControl(moment());
  constructor(private router:Router,private sidemenuservice:SideMenuService, private shared:SharedService,private project:ProjectService,private route:ActivatedRoute) {
    this.sidemenuservice.changeNav({'menu':true});
    this.addProjectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      budgetFrom: new FormControl('', [Validators.required,Validators.pattern(this.shared.getValidator('budget'))]),
      budgetTo: new FormControl('', [Validators.required,Validators.pattern(this.shared.getValidator('budget'))]),
      possesion: new FormControl(this.date, [Validators.required]),
      website: new FormControl('', [Validators.required]),
      knowledge: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      budgetFromUnit: new FormControl('Lc', [Validators.required]),
      budgetToUnit: new FormControl('Lc', [Validators.required]),
      });
    
     const id = this.route.snapshot.paramMap.get('id')
     if(id){
       this.editFlag = true;
       this.showProject(id)
     }
   }

  ngOnInit() {
  }

  addProjectData(addprojectForm:FormGroup){
    console.log(this.addProjectForm.value);
    addprojectForm.value.budgetFrom = addprojectForm.value.budgetFromUnit === 'Lc' ? 
    Number(addprojectForm.value.budgetFrom*100000) : Number(addprojectForm.value.budgetFrom*10000000)
    addprojectForm.value.budgetTo = addprojectForm.value.budgetToUnit === 'Lc' ? 
    Number(addprojectForm.value.budgetTo*100000) : Number(addprojectForm.value.budgetTo*10000000)
    console.log(this.date.value)
    let possesion_month = moment(this.date.value).format('MMMM/YYYY').split('/')[0]
    let possesion_year = moment(this.date.value).format('MMMM/YYYY').split('/')[1]
    var projectpayload={
      "title":addprojectForm.value.name,
      "description":"No description",
      "other_info": "No other info",
      "website":addprojectForm.value.website,
      "status":addprojectForm.value.status,
      "budget_from":addprojectForm.value.budgetFrom,
      "budget_upto":addprojectForm.value.budgetTo,
      "builder_id":"1",
      "knowledge_center": addprojectForm.value.knowledge,
      "posession_month":possesion_month,
      "posession_year":possesion_year,
      "locality_id": 26,
      "locality_name": "Waghbil",
      
    }
     this.project.addProject(projectpayload,this.editFlag,this.id).subscribe(({status}:any)=>{
       if(status){
       this.router.navigate(['/projects']);
       }
    });
  }

  showProject(id){
    this.id = id;
    this.project.getProjectDetails(id).subscribe((res:any)=>{
      this.projectTitle = res.title;
      this.locality = res.locality;
      this.numDifferentiation(res.budget_from,0);
      this.numDifferentiation(res.budget_upto,1);
      this.date.setValue(moment(res.posession_month+'/'+res.posession_year,'MMMM/YYYY'))
     this.addProjectForm.controls['name'].setValue(res.title);
      this.addProjectForm.controls['location'].setValue(res.locality_name);
      this.addProjectForm.controls['budgetFrom'].setValue(this.budgetFrom.budget);
      this.addProjectForm.controls['budgetFromUnit'].setValue(this.budgetFrom.unit);
      this.addProjectForm.controls['budgetTo'].setValue(this.budgetTo.budget);
      this.addProjectForm.controls['budgetToUnit'].setValue(this.budgetTo.unit);
      this.addProjectForm.controls['possesion'].setValue(res.posession_year);
      this.addProjectForm.controls['website'].setValue(res.website);
      this.addProjectForm.controls['knowledge'].setValue(res.knowledge_center);
      this.addProjectForm.controls['status'].setValue(res.status);
    });
    
   }

   numDifferentiation(value,flag) {
    var val = Math.abs(value)
    if (val >= 10000000) {
     flag==0? (this.budgetFrom.budget = (val / 10000000),this.budgetFrom.unit = 'CR') :
      (this.budgetTo.budget = (val / 10000000),this.budgetTo.unit = 'CR') ;
    } else if (val >= 100000) {
      flag==0? (this.budgetFrom.budget = (val / 100000),this.budgetFrom.unit = 'Lc') :
      (this.budgetTo.budget = (val / 100000),this.budgetTo.unit = 'Lc') ;
    }
  }

  chosenYearHandler( normalizedYear: Moment ) {
      const ctrlValue = this.date.value;
      ctrlValue.year(normalizedYear.year());
      this.date.setValue(ctrlValue);
  }

  chosenMonthHandler( normalizedMonth: Moment, datepicker: OwlDateTimeComponent<Moment> ) {
      const ctrlValue = this.date.value;
      ctrlValue.month(normalizedMonth.month());
      this.date.setValue(ctrlValue);
      datepicker.close();
  }


}
