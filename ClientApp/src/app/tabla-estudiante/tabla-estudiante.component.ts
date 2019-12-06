import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../services/estudiantes.service';
import { Estudiantes } from '../models/estudiantes';
@Component({
  selector: 'app-tabla-estudiante',
  templateUrl: './tabla-estudiante.component.html',
  styleUrls: ['./tabla-estudiante.component.css']
})
export class TablaEstudianteComponent implements OnInit {

 
  constructor(private descuentoService: EstudiantesService) { }
  estudiante: Estudiantes[];
  ngOnInit() {


    //  this.estudiante = { id:null,nombre:null,apellido:null,telefono:0,sexo:true,fechaNacimiento:null,programa:null,semestre:null,proyecto:null };

     this.getHeroes();
  }

   getHeroes(): void {
     this.descuentoService.getCliente()
     .subscribe(estudiante => this.estudiante = estudiante);
   }

}
