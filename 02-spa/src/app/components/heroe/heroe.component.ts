import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params.id);
    });
   }
}
