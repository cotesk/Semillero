
import { Estudiantes } from './estudiantes';
import { Docente } from './docente';


import { PlanTrabajo } from "./plan-trabajo";
import { Programa } from "./programa";
export class Semillero {

    
id:number
estadoaval:string;
nombreestudiante:string;
nombredocente:string;
apellidoestudiante:string;
apellidodocente:string;
CvLAC:string;
firmarector:string;

cronograma:string;
estudiante:string;

programa:string;

docente:Docente;
docente_id:number;

}
