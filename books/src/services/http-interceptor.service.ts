import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse} from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { shareService} from './status-variables.service'
import 'rxjs/add/operator/do';

@Injectable()
export class statusCodeInterceptor implements HttpInterceptor {
 
  constructor(private shareService: shareService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log("interceptor success ")
        this.shareService.errorMsg = "Success status code: "+event.status+"\n"+" Error Msg: "+event.statusText;
        this.shareService.errorStatus = false;
        console.log("share service status "+this.shareService.errorStatus+" msg "+this.shareService.errorMsg)
      }
    }, (err: any) => {
      if (event instanceof HttpErrorResponse) {
        this.shareService.errorMsg = "Error status code: "+event.status+"\n"+" Error Msg: "+event.message;
        this.shareService.errorStatus = true;
      }
    });
  }
}