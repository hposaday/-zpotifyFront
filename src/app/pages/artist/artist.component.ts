import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistsService } from './../../services/artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  
  artistId = '';
  artistTopTracks = []

  artistName = ''
  artistImage = ''

  constructor(
    private route: ActivatedRoute,
    private artistsService: ArtistsService 
  ) { }

  ngOnInit() {
    this.artistId = this.route.snapshot.paramMap.get('id')
    
    this.artistsService.getArtistInfo(this.artistId).toPromise().then( artistData => {
      this.artistName = artistData.data.name
      this.artistImage = artistData.data.images[0].url
     
    })

    this.artistsService.getArtistTopTracks(this.artistId).toPromise().then( artistTopTracks => {
      console.log(artistTopTracks,"artistoptracks")
      this.artistTopTracks = artistTopTracks.data
    })

  }

}
