import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-hero',
  templateUrl: './find-hero.component.html'
})
export class FindHeroComponent implements OnInit {

  heroes: any[] = [];
  texto : string;

  constructor( private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private _router:Router ) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params['texto']);
      this.texto = params['texto'];
    } );
  }

  verHeroe( index:number ){
    this._router.navigate( ['/heroe',index] );
  }

}