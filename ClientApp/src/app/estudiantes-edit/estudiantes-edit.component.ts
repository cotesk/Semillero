import { Component, OnInit } from '@angular/core';

import { Estudiantes } from '../models/estudiantes';
import { Location } from '@angular/common';
import { ActivatedRoute } from'@angular/router';
import { EstudiantesService } from '../services/estudiantes.service';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-estudiantes-edit',
  templateUrl: './estudiantes-edit.component.html',
  styleUrls: ['./estudiantes-edit.component.css']
})




export class EstudiantesEditComponent implements OnInit {
estudiante:Estudiantes;
stask:string;



private stepper: Stepper;

next() {
  this.stepper.next();
}
atras() {
  this.stepper.previous();
}
onSubmit() {
  return false;
}


constructor
(
private route: ActivatedRoute,
private estudiantesService: EstudiantesService,
private location: Location
) { }
ngOnInit() {

 
this.get();
this.stepper = new Stepper(document.querySelector('#stepper1'), {
  linear: false,
  animation: true
})
}

get(): void {
const id =
+this.route.snapshot.paramMap.get('id');
this.estudiantesService.get(id)
.subscribe(hero => this.estudiante = hero);
}
update(): void {
this.estudiantesService.update(this.estudiante)
.subscribe(() => this.goBack());
}
delete(): void {
this.estudiantesService.delete(this.estudiante)
.subscribe(() => this.goBack());
}
goBack(): void {
this.location.back();
}
}