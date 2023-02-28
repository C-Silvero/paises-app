import { Component, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Paises } from '../../interfaces';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {

  
  termino: string = ''
  error : boolean = false;
  paises : Paises[] = [];

  constructor(
    private paisService: PaisService
  ){

  }

  buscar( termino: string ){
    this.termino = termino
    this.error = false;

    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
       this.paises = paises;
      },
      err => {
        this.error = true;
        this.paises = []
      }
    )
  }

  recomendacion(){
    this.error = false;
  }
}
