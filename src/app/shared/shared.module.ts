import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaisesModule } from '../paises/paises.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PaisesModule,
    AppRoutingModule
  ], 
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
