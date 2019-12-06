import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../services/docente.service';
import { Docente } from '../models/docente';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
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


  constructor(private descuentoService: DocenteService) { }
  docente: Docente;
  docentes: Docente[];
  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
    this.docente = { id:0,nombre:'',segundonombre:'',apellido:'',segundoapellido:'',telefono:0,sexo:false,fechaNacimiento:'',emailInstitucional:'',emailPersonal:'',programa:'',CvLAC:'',estado:false,direccion:'' };
    this.getHeroes();
  }

  getHeroes(): void {
    this.descuentoService.getCliente()
    .subscribe(docente => this.docentes = docente);
  }


// if(repuesta=="que si me ama"){

//   alert("Tienes una novia  ");

// } else{

//   alert("Tiremonos juntos del rio guatapuri  ");

// }


  registro(){
    if(this.docente.id==0){

      this.docente.id=1;
    
    
    }else if(this.docente.id==1){



      alert('solo puede ser un docente Tutor')
    }

  }

  Guardar() {



    if (this.docente.id ==0 ) {
      alert('el id es obligatorio')
    }else{
      if (this.docente.nombre == ""){
        alert('el  nombre es obligatorio')
  
      }else {
        if (this.docente.apellido == ""){
          alert('el  apellido es obligatorio')
    
        }else{
  
          if (this.docente.sexo == false){
            alert('el  ingreso es obligatorio')
      
          }else{
            if (this.docente.telefono == 0){
              alert('el  telefono es obligatorio')
        
            }else{
  
              if (this.docente.emailPersonal == ""){
                alert('el  semestre es obligatorio')
          
              }else{
  
                if (this.docente.fechaNacimiento == ""){
                  alert('el  fechaNacimiento es obligatorio')
            
                }else{
                  if (this.docente.emailInstitucional == ""){
                    alert('el  nombreproyecto es obligatorio')
              
                  }else{
                    if (this.docente.CvLAC == ""){
                      alert('el  CvLAC es obligatorio')
                
                    }else{
                      this.descuentoService.addDocente(this.docente)
                      .subscribe(task => {
                        alert('Se agrego un nuevo Docente')
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


    // this.registro();

   }


}
