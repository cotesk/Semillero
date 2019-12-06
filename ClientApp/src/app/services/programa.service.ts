




import { Injectable, Inject } from '@angular/core';
import { Programa } from '../models/programa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addDocente(docente: Programa): Observable<Programa> {
    return this.http.post<Programa>(this.baseUrl + 'api/programa', docente, httpOptions).pipe(
      tap((newCliente: Programa) => this.log(`agragado docente w/ id=${newCliente.id}`)),
      catchError(this.handleError<Programa>('addCliente'))
    );
  }

  getCliente(): Observable<Programa[]> {
    return this.http.get<Programa[]>(this.baseUrl + 'api/programa')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Programa[]>('getCliente', []))
      );
  }

  get(id: number): Observable<Programa> {

    const url = `${this.baseUrl + 'api/programa'}/${id}`;
    return this.http.get<Programa>(url).pipe(
      tap(_ => this.log(`fetched Socio id=${id}`)),
      catchError(this.handleError<Programa>(`get id=${id}`))
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
