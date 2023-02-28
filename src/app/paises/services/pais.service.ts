import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  apiUrl = 'https://restcountries.com/v2';


  constructor(
    private http: HttpClient
  ) { }

  buscarPais( termino: string): Observable<Paises[]> {
    return this.http.get<Paises[]>(`${this.apiUrl}/name/${termino}`)
  }

  buscarCapital( termino: string): Observable<Paises[]>{
    return this.http.get<Paises[]>(`${this.apiUrl}/capital/${termino}`)
  }

  buscarRegion( region: string): Observable<Paises[]>{
    return this.http.get<Paises[]>(`https://restcountries.com/v2/regionalbloc/${region}`)
  }

  verPais( id: string): Observable<Paises>{
    return this.http.get<Paises>(`${this.apiUrl}/alpha/${id}`)
  }


}
