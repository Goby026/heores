import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  /* _heroe llegará de la vista del componente heroes, esto quiere decir que podemos usar esta propiedad-variable en el componente html de heroes */
  @Input() heroe:any = {};

  @Input() index:number;

  constructor( private _router:Router ) { }

  ngOnInit() {
  }

  verHeroe(){
    this._router.navigate( ['/heroe',this.index] );
  }

}
