import { Component } from '@angular/core';
import { Paises } from '../../interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {

  capital: Paises[] = [];
  error: boolean = false;
  termino: string = '';

  constructor(
    private paisService: PaisService
  ){

  }

  buscar( termino: string ){
    this.termino = termino
    this.error = false;

    this.paisService.buscarCapital(termino).subscribe(
      (capital) => {
       this.capital = capital;
      },
      err => {
        this.error = true;
        this.capital = []
      }
    )
  }
}
