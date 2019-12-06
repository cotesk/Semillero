

import { Injectable, Inject } from '@angular/core';
import { Semillero } from '../models/semillero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SemilleroService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addDocente(docente: Semillero): Observable<Semillero> {
    return this.http.post<Semillero>(this.baseUrl + 'api/semillero', docente, httpOptions).pipe(
      tap((newCliente: Semillero) => this.log(`agragado docente w/ id=${newCliente.id}`)),
      catchError(this.handleError<Semillero>('addCliente'))
    );
  }

  getCliente(): Observable<Semillero[]> {
    return this.http.get<Semillero[]>(this.baseUrl + 'api/semillero')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Semillero[]>('getCliente', []))
      );
  }

  get(id: number): Observable<Semillero> {

    const url = `${this.baseUrl + 'api/semillero'}/${id}`;
    return this.http.get<Semillero>(url).pipe(
      tap(_ => this.log(`fetched Socio id=${id}`)),
      catchError(this.handleError<Semillero>(`get id=${id}`))
    );
  }

  update (docente: Semillero): Observable<any> {
    const url =
    
    `${this.baseUrl + 'api/semillero'}/${docente.id}`;
    return this.http.put(url, docente, httpOptions).pipe(
    tap(_ => this.log(`updated libro isbn=${docente.id}`)),
    catchError(this.handleError<any>('libro'))
    );
    }


  delete (docente: Semillero | number): Observable<Semillero> {
    const id = typeof docente === 'number' ? docente : docente.id;
    const url =
    
    `${this.baseUrl + 'api/semillero'}/${id}`;
    
    return this.http.delete<Semillero>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Docente id=${id}`)),
    catchError(this.handleError<Semillero>('deleteTask'))
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
