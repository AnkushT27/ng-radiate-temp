import { Component, OnInit } from '@angular/core';
import {classie} from 'desandro-classie'
import * as $ from 'jquery';
import {SideMenuService} from '../../side-menu.service'
import { Router } from '../../../../node_modules/@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuArray:any=[];
  constructor(private shared:SharedService,private sidemenuservice:SideMenuService,private router:Router) {
   this.menuArray = [
      {
         "state":true
      },
      {
        "state":false
      },
      {
        "state":false
      }
    ]
   }

  ngOnInit() {
   this.sidemenuservice.menuSource$.subscribe((data)=>{
     if(data!=-1){
       this.menuClicked(data)
     }
   })
  }

  logout(){
    this.shared.logout().subscribe((res:any)=>{
      localStorage.clear();
      $('body').removeClass('cbp-spmenu-push');
      $('body').removeClass('cbp-spmenu-push-toright');
      this.router.navigate([''])
    })
  }
  
  menuClicked(index){
   index == 0 ? (this.menuArray[index].state = true,this.menuArray[1].state = false,this.menuArray[2].state = false) :
   (index == 1 ? (this.menuArray[index].state = true,this.menuArray[0].state = false,this.menuArray[2].state = false) :
   (this.menuArray[index].state = true,this.menuArray[1].state = false,this.menuArray[0].state = false) )
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
