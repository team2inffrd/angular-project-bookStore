import { Injectable } from '@angular/core'

@Injectable()
export class shareService {
    static errorStatus: boolean;
  //data variables to share over the applications
  errorStatus : boolean = false; 
}