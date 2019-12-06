import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../services/estudiantes.service';
import { Estudiantes } from '../models/estudiantes';
import Stepper from 'bs-stepper';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

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



  constructor(private descuentoService: EstudiantesService) {  }
  estudiante: Estudiantes;
  estudiantess:Estudiantes[];
  ngOnInit() {

    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
     this.estudiante = { id:0,nombre:'',segundonombre:'',apellido:'',segundoapellido:'',telefono:0,sexo:false,fechaNacimiento:'',programa:'',semestre:'',proyecto:'',ingreso:'',CvLAC:'',estado:false,direccion:''};

     this.getHeroes();
  }


   getHeroes(): void {
     this.descuentoService.getCliente()
     .subscribe(estudiante => this.estudiantess = estudiante);
   }




registro(){

if(this.estudiante.id==0){

  this.estudiante.id=1;


}else if(this.estudiante.id==1){

  this.estudiante.id=2;


}else if(this.estudiante.id==2){

  this.estudiante.id=3;


}else if(this.estudiante.id==3){

  this.estudiante.id=4;


}else if(this.estudiante.id==4){

  this.estudiante.id=5;

 
}else if(this.estudiante.id==5){



  alert('ya son 5 Estudiantes')
}



}



  // voidCalcularTarifa(){
  //   if(this.paciente.salario>2500000){
  //     this.paciente.tarifa=0.2;
  //     this.paciente.valorCopago=((this.paciente.tarifa)*this.paciente.valorServivcio);
  //   }else{
  //     this.paciente.tarifa=0.1;
  //     this.paciente.valorCopago=((this.paciente.tarifa)*this.paciente.valorServivcio);
  //   }
   
  // }
  // delete(): void {
  //   this.descuentoService.delete(this.estudiante)
  //     .subscribe(() => this.goBack());
  // }
  idestudiante(id:number){

    this.estudiantess = this.descuentoService.getFiltrar(id);
  
  }
  //  cargardatos(){

  //     this.estudiantess = this.descuentoService.getCliente();

  //   }

 

  Guardar() {
    

  if (this.estudiante.id  ==0 ) {
    alert('el id es obligatorio')
  }else{
    if (this.estudiante.nombre == ""){
      alert('el  nombre es obligatorio')

    }else {
      if (this.estudiante.apellido == ""){
        alert('el  apellido es obligatorio')
  
      }else{

        if (this.estudiante.ingreso == ""){
          alert('el  ingreso es obligatorio')
    
        }else{
          if (this.estudiante.telefono == 0){
            alert('el  telefono es obligatorio')
      
          }else{

            if (this.estudiante.semestre == ""){
              alert('el  semestre es obligatorio')
        
            }else{

              if (this.estudiante.fechaNacimiento == ""){
                alert('el  fechaNacimiento es obligatorio')
          
              }else{
                if (this.estudiante.proyecto == ""){
                  alert('el  nombreproyecto es obligatorio')
            
                }else{
                  if (this.estudiante.CvLAC == ""){
                    alert('el  CvLAC es obligatorio')
              
                  }else{
                    if (this.estudiante.sexo == false){
                      alert('el  ingreso es obligatorio')
                
                    }else{


                      if (this.estudiante.apellido != ""){
     
                        this.descuentoService.addEstudiante(this.estudiante)
                        .subscribe(task => {
                          alert('Se agrego un nuevo contrato')
                          this.getHeroes();
                        });
                    
                      }

                    }
                  }
                }
              }
            }
          }

        }


      }

    }
  }

   
  }






}
