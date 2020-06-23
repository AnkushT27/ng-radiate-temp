import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  headerObj = {"menu":false}
  shared = '';
  // Observable Item source
  private _navItemSource = new BehaviorSubject(this.headerObj);
  private _sharedData = new BehaviorSubject(this.shared)
  // Observable Item stream
  Item$ = this._navItemSource.asObservable();
  Value$ = this._sharedData.asObservable()
  changeNav(number) {
   this._navItemSource.next(number);
 }

 changeValue(data){
    this._sharedData.next(data)
 }
   constructor() { }
}
