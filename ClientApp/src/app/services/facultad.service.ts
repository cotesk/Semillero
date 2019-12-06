


import { Injectable, Inject } from '@angular/core';
import { Facultad } from '../models/facultad';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addDocente(docente: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(this.baseUrl + 'api/facultad', docente, httpOptions).pipe(
      tap((newCliente: Facultad) => this.log(`agragado docente w/ id=${newCliente.id}`)),
      catchError(this.handleError<Facultad>('addCliente'))
    );
  }

  getCliente(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(this.baseUrl + 'api/facultad')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Facultad[]>('getCliente', []))
      );
  }

  get(id: number): Observable<Facultad> {

    const url = `${this.baseUrl + 'api/facultad'}/${id}`;
    return this.http.get<Facultad>(url).pipe(
      tap(_ => this.log(`fetched Socio id=${id}`)),
      catchError(this.handleError<Facultad>(`get id=${id}`))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} Fallo Listado: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    alert(`ServicioCliente: ${message}`);
  }
}
