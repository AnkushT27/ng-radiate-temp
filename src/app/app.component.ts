import { Component } from '@angular/core';
import { SideMenuService } from './side-menu.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-radiate';
  menu:boolean =false;
  subscription:Subscription;
  constructor(private sidemenuService:SideMenuService){}

  ngOnInit() {
    this.subscription = this.sidemenuService.Item$
      .subscribe(item => {this.menu = item.menu;})
  }
}
