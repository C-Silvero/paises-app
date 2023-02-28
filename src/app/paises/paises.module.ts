import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { InputComponent } from './components/input/input.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent
  ]
})
export class PaisesModule { }
