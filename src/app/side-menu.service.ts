import { Injectable } from '@angular/core';
import {BehaviorSubject,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  headerObj = {"menu":false}
  shared = '';
  menuHandler :any = ['/leads','/projects','/brokers']
  // Observable Item source
  private _navItemSource = new BehaviorSubject(this.headerObj);
  private _sharedData = new BehaviorSubject(this.shared)
  private _menuSource = new BehaviorSubject(this.menuHandler)
  // Observable Item stream
  Item$ = this._navItemSource.asObservable();
  Value$ = this._sharedData.asObservable();
  menuSource$ = this._menuSource.asObservable();
  changeNav(number) {
   this._navItemSource.next(number);
 }

 changeValue(data){
    this._sharedData.next(data)
 }

  changeMenu([menu]) {
   let index =  this.menuHandler.findIndex((data)=>menu === data)
   console.log('index',index)
   this._menuSource.next(index)
 }
   constructor() { }
}
