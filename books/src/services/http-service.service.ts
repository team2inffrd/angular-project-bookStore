import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse} from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { shareService } from './status-variables.service'
import 'rxjs/add/operator/do';

//import 'rxjs/add/operator/map'

@Injectable()
export class BackendService {
    // Url to API
    private baseUrl = 'http://localhost:3000/books/';

    // Injecting the http client into the service
    constructor(private http: HttpClient, private shareService: shareService) {}

    // Method to post data
    update (data): void {
        //console.log("in udpate method data value "+JSON.stringify(data))
        this.http.post(
            this.baseUrl,
            data
        ).subscribe(
            res => {
              console.log("Success: inserted");
              shareService.errorStatus = false;
            },
            err => {
              shareService.errorStatus = true;
              console.log("Error: "+err);
              console.log("shareService.errorStatus "+shareService.errorStatus);
            }
        );
    }

    getData (regNum : string) : Observable < any > {
        return this.http.get(this.baseUrl+regNum);
    }
    
    // This method parses the data to JSON
    parseData(res: Response)  {
        return res.json() || [];
    }

    // Displays the error message
    private handleError(error: Response | any) {
        let errorMessage: string;

        errorMessage = error.message ? error.message : error.toString();

        // In real world application, call to log error to remote server
        // logError(error);

        // This returns another Observable for the observer to subscribe to
        return Observable.throw(errorMessage);
    }
}
