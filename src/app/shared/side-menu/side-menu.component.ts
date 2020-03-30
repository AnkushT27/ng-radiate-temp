import { Component, OnInit } from '@angular/core';
import {classie} from 'desandro-classie'
import * as $ from 'jquery';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
