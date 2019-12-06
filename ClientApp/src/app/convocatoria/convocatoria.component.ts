import { Component, OnInit } from '@angular/core';
import { ConvocatoriaService } from '../services/convocatoria.service';
import { Convocatoria } from '../models/convocatoria';
import Stepper from 'bs-stepper';
import { NgForm } from '@angular/forms';
import { isUndefined } from 'util';
@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css']
})
export class ConvocatoriaComponent implements OnInit {



  private stepper: Stepper;

  next() {
    this.stepper.next();
  }
  atras() {
    this.stepper.previous();
  }
  onSubmit(from: NgForm) {

    console.log(from);


  }

  registro(){

     if(this.convocatoria.id==1){

      
      alert('ya mucho de regitro Estudiantes')
    
    }


  }


  constructor(private descuentoService: ConvocatoriaService) { }
  convocatoria: Convocatoria;
  convocatorias: Convocatoria[];
  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
    this.convocatoria = { id:0,nombreconvocatoria:'',fechainicio:'',fechacierre:'',estado:false };
    this.getHeroes();
  }

  getHeroes(): void {
    this.descuentoService.getCliente()
    .subscribe(convocatoria => this.convocatorias = convocatoria);
  }


  

  Guardar() {
    // this.registro();

  
      if (this.convocatoria.nombreconvocatoria =="" ) {
        alert('el nombreconvocatoria es obligatorio')
      }else{


        if (this.convocatoria.fechainicio =="" ) {
          alert('el fechainicio es obligatorio')
        }else{

          if (this.convocatoria.fechacierre =="" ) {
            alert('el fechacierre es obligatorio')
          }else{
            // this.registro();


this.descuentoService.getCurrentConvocatoria().subscribe(c=>{
  if(isUndefined(c)){
    this.descuentoService.addDocente(this.convocatoria)
    .subscribe(task => {
      alert('Se agrego un nuevo Docente')
      this.getHeroes();
    });

  }else{
    alert("existe una convocatoria")
  }
})


          
          }
        }

      }

    
  
   }


 


}
