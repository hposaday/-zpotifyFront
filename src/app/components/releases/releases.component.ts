import { Component, OnInit } from '@angular/core';

import { AlbumsService } from './../../services/albums.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {

  latestReleases = []

  constructor(
    private albumsService: AlbumsService
  ) { }

  ngOnInit() {
    this.albumsService.getLatestReleases().toPromise().then( releases => {
      console.log(releases)  
      this.latestReleases = releases.data
    })
  }

}
