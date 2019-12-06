import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Estudiantes } from './models/estudiantes';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    
    //  const estudiante = [
     
    //    {  id:'12',nombre:'carlos',apellido:'cotes',telefono:'3008950762',sexo:'Hombre',fechaNacimiento:'12',programa:'sistema',semestre:'septimo',proyecto:'Flor',ingreso:'12/07/2019'  },
     
    //  ];
    //  return {estudiante};
    const docente = [
      // { cedula: '1555', nombre: 'Mike Benya',fondos:'2000',suscripcion:'vip' },
      {  id:'12',nombre:'carlos',apellido:'cotes',telefono:'3008950762',sexo:'Hombre',fechaNacimiento:'12/09/97',emailInstitucional:'unicesar@',emailPersonal:'jose@',programa:'Flor',CvLAC:'http//'  },

    ];
    return {docente};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(socios: Socio[]): number {
  //   return socios.length > 0 ? Math.max(...socios.map(Socio => Socio.cedula)) + 1 : 11;
  // }
}