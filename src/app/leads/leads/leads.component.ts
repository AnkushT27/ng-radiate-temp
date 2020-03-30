import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../../side-menu.service'
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  constructor(private sidemenuservice : SideMenuService) { 
    this.sidemenuservice.changeNav({'menu':true})
  }

  ngOnInit() {
  }

}
