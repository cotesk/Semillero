import { Injectable, Inject } from '@angular/core';
import { Convocatoria } from '../models/convocatoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addDocente(docente: Convocatoria): Observable<Convocatoria> {
    return this.http.post<Convocatoria>(this.baseUrl + 'api/Convocatoria', docente, httpOptions).pipe(
      tap((newCliente: Convocatoria) => this.log(`agragado docente w/ id=${newCliente.id}`)),
      catchError(this.handleError<Convocatoria>('addCliente'))
    );
  }

  getCliente(): Observable<Convocatoria[]> {
    return this.http.get<Convocatoria[]>(this.baseUrl + 'api/convocatoria')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Convocatoria[]>('getCliente', []))
      );
  }
  getCurrentConvocatoria(): Observable<Convocatoria> {

    const url = `${this.baseUrl + 'api/convocatoria'}/current`;
    return this.http.get<Convocatoria>(url).pipe(
      tap(_ => this.log(`Error `)),
      catchError(e=>{
        return of(undefined);
      })
    );
  }

  get(id: number): Observable<Convocatoria> {

    const url = `${this.baseUrl + 'api/convocatoria'}/${id}`;
    return this.http.get<Convocatoria>(url).pipe(
      tap(_ => this.log(`fetched Socio id=${id}`)),
      catchError(this.handleError<Convocatoria>(`get id=${id}`))
    );
  }

  update (docente: Convocatoria): Observable<any> {
    const url =
    
    `${this.baseUrl + 'api/convocatoria'}/${docente.id}`;
    return this.http.put(url, docente, httpOptions).pipe(
    tap(_ => this.log(`updated libro isbn=${docente.id}`)),
    catchError(this.handleError<any>('libro'))
    );
    }


  delete (docente: Convocatoria | number): Observable<Convocatoria> {
    const id = typeof docente === 'number' ? docente : docente.id;
    const url =
    
    `${this.baseUrl + 'api/convocatoria'}/${id}`;
    
    return this.http.delete<Convocatoria>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Docente id=${id}`)),
    catchError(this.handleError<Convocatoria>('deleteTask'))
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
