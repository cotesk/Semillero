

import { Injectable, Inject } from '@angular/core';
import { Docente } from '../models/docente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.baseUrl + 'api/Docente', docente, httpOptions).pipe(
      tap((newCliente: Docente) => this.log(`agragado docente w/ id=${newCliente.id}`)),
      catchError(this.handleError<Docente>('addCliente'))
    );
  }

  getCliente(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.baseUrl + 'api/docente')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Docente[]>('getCliente', []))
      );
  }

  get(id: number): Observable<Docente> {

    const url = `${this.baseUrl + 'api/docente'}/${id}`;
    return this.http.get<Docente>(url).pipe(
      tap(_ => this.log(`fetched Socio id=${id}`)),
      catchError(this.handleError<Docente>(`get id=${id}`))
    );
  }

  update (docente: Docente): Observable<any> {
    const url =
    
    `${this.baseUrl + 'api/docente'}/${docente.id}`;
    return this.http.put(url, docente, httpOptions).pipe(
    tap(_ => this.log(`updated libro isbn=${docente.id}`)),
    catchError(this.handleError<any>('libro'))
    );
    }


  delete (docente: Docente | number): Observable<Docente> {
    const id = typeof docente === 'number' ? docente : docente.id;
    const url =
    
    `${this.baseUrl + 'api/docente'}/${id}`;
    
    return this.http.delete<Docente>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Docente id=${id}`)),
    catchError(this.handleError<Docente>('deleteTask'))
    );
    }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} Fallo Listado Docente: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    alert(`ServicioCliente: ${message}`);
  }
}
