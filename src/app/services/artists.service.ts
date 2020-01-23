import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from './../constants/config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  serverUrl = SERVER_URL.dev;

  constructor(
    private httpClient: HttpClient
  ) { }

  getArtistInfo (artistId) : Observable<any> {
    let endPoint = 'artist/'
    return this.httpClient.get(this.serverUrl + endPoint + artistId);
 }

 getArtistTopTracks (artistId) : Observable<any> {
  let endPoint = 'artist/top-tracks/'
  return this.httpClient.get(this.serverUrl + endPoint + artistId);
}
}
