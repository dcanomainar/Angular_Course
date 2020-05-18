import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
  }

  search(term: string) {
    this.loading = true;

    this.spotify.getArtists(term)
        .subscribe((resp: any) => {
          this.artists = resp;
          this.loading = false;
        });
  }
}
