import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';
import { CapitalComponent } from './paises/pages/capital/capital.component';
import { RegionComponent } from './paises/pages/region/region.component';
import { PaisComponent } from './paises/pages/pais/pais.component';

const routes: Routes = [
  { path: '', component: PaisComponent, pathMatch: 'full'},
  { path: 'ver-pais/:id', component: VerPaisComponent},
  { path: 'capitales', component: CapitalComponent},
  { path: 'regiones', component: RegionComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
