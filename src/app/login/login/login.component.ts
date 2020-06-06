import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SharedService} from '../../shared/shared.service'
import {LoginService} from '../login.service'
import { Router } from '../../../../node_modules/@angular/router';
import { SideMenuService } from '../../side-menu.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userData:any;
  constructor(private sidemenuservice:SideMenuService, private shared:SharedService,private loginservice : LoginService,private router:Router) {
    this.sidemenuservice.changeNav({'menu':false});
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.pattern(this.shared.getValidator('emailRegex'))]),
      password: new FormControl('', [Validators.required]),
      
      });
  }

  ngOnInit() {
  }

  login(loginForm:FormGroup){
    
    this.loginservice.login(loginForm.value).subscribe((res:any)=>{
      this.userData = res;
      localStorage.setItem('token',this.userData.data.token);
      localStorage.setItem('user_id',this.userData.data.user_id);
      localStorage.setItem('email',this.userData.data.email);
      localStorage.setItem('name',this.userData.data.name);
      localStorage.setItem('role_id',this.userData.data.role_id);
      localStorage.setItem('role_name',this.userData.data.role_name);
      localStorage.setItem('firm_name',this.userData.data.firm_name);
      this.router.navigate(['/leads']);
     },
     (err)=>{

     })
  }

  
}
