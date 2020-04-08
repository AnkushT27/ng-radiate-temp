import { Injectable } from '@angular/core';
import {HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpResponse,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { Router } from '../../../node_modules/@angular/router';
import Swal from 'sweetalert2';
@Injectable({
    providedIn: 'root'
  })
export class Interceptor implements HttpInterceptor {

	constructor(private spinner:NgxSpinnerService,private toaster:ToastrService,private route:Router) { }

	// intercept request and add token
  	intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

        // modify request
        this.spinner.show();
        if(localStorage.getItem('token')){
	    request = request.clone({ headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Token token=${localStorage.getItem('token')}`
           })
        })
    }
       console.log(request);
        //handle response
        return next.handle(request)
	    .pipe(
	        tap(event => {
	          if (event instanceof HttpResponse) {
                // http response status code
                this.spinner.hide()
	            console.log(event.status);
	          }
	        }, error => {
                this.spinner.hide()
                // error handling to be done here
	   			// http response status code
               console.error(error.status);
               if(error.status == 500){
                Swal.fire('Oops...', 'Something went wrong!', 'error')
                  //this.toaster.error('Something went wrong','INFO')
               }
               else if(error.status == 401){
                Swal.fire('Oops...', 'Something went wrong!', 'error')
                //this.toaster.error('Unauthorized','INFO')
                localStorage.clear();
                $('body').removeClass('cbp-spmenu-push');
                $('body').removeClass('cbp-spmenu-push-toright');
                this.route.navigate([''])
               }
	          	console.error(error.message);
	          	console.log("--- end of response---");

	        })
	      )

    };
  
 
}