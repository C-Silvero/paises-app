import { Component } from '@angular/core';
import { Input } from '@angular/core'
import { Paises } from '../../interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {

  @Input() paises: Paises[] = [];
  @Input() error: boolean = false;

}
