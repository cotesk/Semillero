import { Injectable, Inject } from '@angular/core';
import { SolicitarAval } from '../models/solicitar-aval';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SolicitudAvalService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addDocente(docente: SolicitarAval): Observable<SolicitarAval> {
    return this.http.post<SolicitarAval>(this.baseUrl + 'api/solicitarAval', docente, httpOptions).pipe(
      tap((newCliente: SolicitarAval) => this.log(`agragado docente w/ id=${newCliente.id}`)),
      catchError(this.handleError<SolicitarAval>('addCliente'))
    );
  }

  getCliente(): Observable<SolicitarAval[]> {
    return this.http.get<SolicitarAval[]>(this.baseUrl + 'api/solicitarAval')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<SolicitarAval[]>('getCliente', []))
      );
  }

  get(id: number): Observable<SolicitarAval> {

    const url = `${this.baseUrl + 'api/solicitarAval'}/${id}`;
    return this.http.get<SolicitarAval>(url).pipe(
      tap(_ => this.log(`fetched Socio id=${id}`)),
      catchError(this.handleError<SolicitarAval>(`get id=${id}`))
    );
  }

  update (docente: SolicitarAval): Observable<any> {
    const url =
    
    `${this.baseUrl + 'api/solicitarAval'}/${docente.id}`;
    return this.http.put(url, docente, httpOptions).pipe(
    tap(_ => this.log(`updated libro isbn=${docente.id}`)),
    catchError(this.handleError<any>('libro'))
    );
    }


  delete (docente: SolicitarAval | number): Observable<SolicitarAval> {
    const id = typeof docente === 'number' ? docente : docente.id;
    const url =
    
    `${this.baseUrl + 'api/solicitarAval'}/${id}`;
    
    return this.http.delete<SolicitarAval>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Docente id=${id}`)),
    catchError(this.handleError<SolicitarAval>('deleteTask'))
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
