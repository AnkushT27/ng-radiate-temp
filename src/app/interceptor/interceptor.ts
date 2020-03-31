import { Injectable } from '@angular/core';
import {HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpResponse,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
    providedIn: 'root'
  })
export class Interceptor implements HttpInterceptor {

	constructor(private spinner:NgxSpinnerService) { }

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
	          	console.error(error.message);
	          	console.log("--- end of response---");

	        })
	      )

    };
  
 
}