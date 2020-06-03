import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SharedService} from '../../shared/shared.service'
import { Router } from '../../../../node_modules/@angular/router';
import { SideMenuService } from '../../side-menu.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  passwordResetForm: FormGroup;
  userData:any;
  constructor(private sidemenuservice:SideMenuService, private shared:SharedService,private router:Router) {
    this.sidemenuservice.changeNav({'menu':false});
    this.passwordResetForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.pattern(this.shared.getValidator('emailRegex'))]),
      });
  }

  ngOnInit() {
  }

  passwordReset(){
    console.log('email--->',this.passwordResetForm.get('email').value)
  }
}
