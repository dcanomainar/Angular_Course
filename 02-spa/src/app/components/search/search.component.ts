import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.searchHeroe(params['value']);
    });
  }

  // seeHeroe(idx: number) {
  //   this.router.navigate( ['heroe', idx] );
  // }
}
