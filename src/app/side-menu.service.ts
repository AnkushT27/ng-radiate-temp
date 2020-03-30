import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  headerObj = {"menu":false}
  // Observable Item source
  private _navItemSource = new BehaviorSubject(this.headerObj);
 
  // Observable Item stream
  Item$ = this._navItemSource.asObservable();
 
  changeNav(number) {
   this._navItemSource.next(number);
 }
   constructor() { }
}
