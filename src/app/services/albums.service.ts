import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from './../constants/config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  serverUrl = SERVER_URL.dev;
  
  constructor(
      private httpClient: HttpClient
      ) { }

  getLatestReleases () : Observable<any> {
     let endPoint = 'latest-releases'
     return this.httpClient.get(this.serverUrl + endPoint);
  }
}
