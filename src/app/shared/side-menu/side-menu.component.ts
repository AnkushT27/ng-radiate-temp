import { Component, OnInit } from '@angular/core';
import {classie} from 'desandro-classie'
import * as $ from 'jquery';
import { SharedService } from '../shared.service';
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuArray:any=[];
  constructor(private shared:SharedService,private router:Router) {
    this.menuArray = [
      {
        "menuName":"All Leads",
        "state":true,
        "routerLink":"leads",
        "icon":"allleads_selected"
      },
      {
        "menuName":"My Projects",
        "state":false,
        "routerLink":"projects",
        "icon":"project"
      },
      {
        "menuName":"Associate Brokers",
        "state":false,
        "routerLink":"brokers",
        "icon":"broker"
      }
    ]
   }

  ngOnInit() {
  }

  logout(){
    this.shared.logout().subscribe((res:any)=>{
      localStorage.clear();
      this.router.navigate(['/login'])
    })
  }
  
  menuClicked(index){
    this.menuArray.forEach((element,itempos) => {
      index == itempos ? (element.state = true,element.icon = element.icon+'_selected'):
      (element.state=false,element.icon = element.icon.split('_')[0]);

    });
  }

  toggleMenu(){
    console.log('pop--->')
    var body = document.body;
    $(document).ready(function(){
      $('#sideBar').click(function(e){
        e.preventDefault();
        console.log('this is my onclick');
        $(this).toggleClass('active');
        $(body).toggleClass('cbp-spmenu-push-toright');
        $('#sideBarMenu').toggleClass('cbp-spmenu-open')
      })
  
});
  }}
