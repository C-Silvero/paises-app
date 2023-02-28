import { Component } from '@angular/core';
import { Paises } from '../../interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regionActiva: string = '';
  paises : Paises[] = []

  regiones: { siglas: string, nombreCompleto: string }[] = [
    { siglas: 'EU', nombreCompleto: 'Unión Europea' },    
    { siglas: 'EFTA', nombreCompleto: 'Asociación Europea de Libre Comercio' },
    { siglas: 'CARICOM', nombreCompleto: 'Comunidad del Caribe' },
    { siglas: 'PA', nombreCompleto: 'Alianza del Pacífico' },   
    { siglas: 'AU', nombreCompleto: 'Unión Africana' },    
    { siglas: 'USAN', nombreCompleto: 'Unión de Naciones Suramericanas' },    
    { siglas: 'EEU', nombreCompleto: 'Unión Económica Euroasiática' },    
    { siglas: 'AL', nombreCompleto: 'Alianza para el Progreso' },    
    { siglas: 'ASEAN', nombreCompleto: 'Asociación de Naciones del Sudeste Asiático' },    
    { siglas: 'CAIS', nombreCompleto: 'Comunidad Andina' },    
    { siglas: 'CEFTA', nombreCompleto: 'Acuerdo de Libre Comercio de Europa Central'},    
    { siglas: 'NAFTA', nombreCompleto: 'Tratado de Libre Comercio de América del Norte' },    
    { siglas: 'SAARC', nombreCompleto: 'Asociación de Naciones del Asia Meridional' }  ];

  constructor(
    private paisService: PaisService
  ){

  }

  activarRegion( region: string){
    
    if ( region === this.regionActiva) { return }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region ).subscribe(
      (paises) => this.paises = paises
    )
  }

}
