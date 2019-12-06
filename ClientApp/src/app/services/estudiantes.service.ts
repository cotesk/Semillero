

import { Injectable, Inject } from '@angular/core';
import { Estudiantes } from '../models/estudiantes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {filter}from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  estudiantes:Estudiantes[];
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addEstudiante(estudiante: Estudiantes): Observable<Estudiantes> {
    return this.http.post<Estudiantes>(this.baseUrl + 'api/estudiante', estudiante, httpOptions).pipe(
      tap((newCliente: Estudiantes) => this.log(`agragado estudiantes w/ id=${newCliente.id}`)),
      catchError(this.handleError<Estudiantes>('addCliente'))
    );
  }

  getCliente(): Observable<Estudiantes[]> {
    return this.http.get<Estudiantes[]>(this.baseUrl + 'api/estudiante')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Estudiantes[]>('getCliente', []))
      );
  }

  get(id: number): Observable<Estudiantes> {

    const url = `${this.baseUrl + 'api/estudiante'}/${id}`;
    return this.http.get<Estudiantes>(url).pipe(
      tap(_ => this.log(`fetched Socio id=${id}`)),
      catchError(this.handleError<Estudiantes>(`get id=${id}`))
    );
  }

  update (estudiante: Estudiantes): Observable<any> {
    const url =
    
    `${this.baseUrl + 'api/estudiante'}/${estudiante.id}`;
    return this.http.put(url, estudiante, httpOptions).pipe(
    tap(_ => this.log(`updated libro isbn=${estudiante.id}`)),
    catchError(this.handleError<any>('libro'))
    );
    }


  delete (estudiante: Estudiantes | number): Observable<Estudiantes> {
    const id = typeof estudiante === 'number' ? estudiante : estudiante.id;
    const url =
    
    `${this.baseUrl + 'api/estudiante'}/${id}`;
    
    return this.http.delete<Estudiantes>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted libro isbn=${id}`)),
    catchError(this.handleError<Estudiantes>('deleteTask'))
    );
    }


getFiltrar(id:number): Estudiantes[]{

let estudiantes= this.getCliente();

let estudiante = this.estudiantes.filter(item  => item.id ==id);
return estudiante;



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