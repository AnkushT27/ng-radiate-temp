import { Component } from '@angular/core';
import { SideMenuService } from './side-menu.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-radiate';
  menu:boolean =false;
  subscription:Subscription;
  constructor(private sidemenuservice:SideMenuService,private router:Router){}

  ngOnInit() {
    this.subscription = this.sidemenuservice.Item$
      .subscribe(item => {
        this.menu = item.menu;
        if(localStorage.getItem('token')){
          let path = window.location.pathname
          this.sidemenuservice.changeMenu([path]);
          $('body').addClass('cbp-spmenu-push');
          $('body').addClass('cbp-spmenu-push-toright');
          this.router.navigate([`/${path}`]);
        }
      
      })
     
  }
}
