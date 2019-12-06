import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../services/estudiantes.service';
import { Estudiantes } from '../models/estudiantes';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-registrarsemillero',
  templateUrl: './registrarsemillero.component.html',
  styleUrls: ['./registrarsemillero.component.css'],
  providers:[EstudiantesService]
})
export class RegistrarsemilleroComponent implements OnInit {
  private stepper: Stepper;
  filterPost = '';


  
  next() {
    this.stepper.next();
  }
  atras() {
    this.stepper.previous();
  }
  onSubmit() {
    return false;
  }
  constructor(private descuentoService: EstudiantesService) { }
  estudiantess:Estudiantes[];
  
  ngOnInit() {

    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
    this.getHeroes();
  }


  getHeroes(): void {




    this.descuentoService.getCliente()
    .subscribe(estudiante => this.estudiantess = estudiante);
  }



  // cargardatos(){

  //    this.estudiantess = this.descuentoService.getCliente();

  // }






  buy(){
    const compra = this.estudiantess.filter(compras => compras.estado === true );
    localStorage.clear();
    localStorage.setItem('compra',JSON.stringify(compra));
    alert(JSON.stringify(localStorage.getItem('compra')));
  }





}
