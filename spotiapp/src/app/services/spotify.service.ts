import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBMCIfRwY8iEVFGO-l9ZYEDd8-m1Xm3PuBBaKMATRCt4hdP7kn1uFg8qSz75duPIFNTT8hJJd6IeCS-Jqs'
    });

    return this.http.get(url, { headers });
  }

  //WON't Work here because of a restriction of spotify.

  // getToken() {
  //   const headers = new HttpHeaders({
  //     'grant_type': 'client_credentials',
  //     'client_id': 'adbb037dd55442ea8ef83fc675d07c2c',
  //     'client_secret': '253c99d402434053befbc48a18dab808'
  //   });

  //   this.http.post('https://accounts.spotify.com/api/token', null, {headers})
  //     .subscribe(resp => {
  //       console.log(resp);
  //     });
  // }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
               .pipe(map((resp: any) => resp.albums.items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
               .pipe(map((resp: any) => resp.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
               .pipe(map((resp: any) => resp.tracks));
  }
}
