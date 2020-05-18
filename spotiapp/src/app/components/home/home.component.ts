import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  newSongs: any[] = [];
  loading: boolean;

  error: boolean;
  messageError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( (resp: any) => {
          this.newSongs = resp;
          this.loading = false;
        }, (error) => {
          this.loading = false;
          this.error = true;
          console.log(error);
          this.messageError = error.error.error.message;
        });
  }
}
