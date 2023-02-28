import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Paises } from '../../interfaces';
import { switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{

  pais!: Paises;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisServices: PaisService
  )
  {

  }

  ngOnInit(): void {
   
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisServices.verPais( id )  ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );
  }

}
