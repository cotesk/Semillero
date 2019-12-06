
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Convocatoria } from '../models/convocatoria';
import { ConvocatoriaService } from '../services/convocatoria.service';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})

  export class PruebaComponent implements OnInit {
  //   name = 'Angular';
  // private stepper: Stepper;
  convocatorias: Convocatoria[];
  // next() {
  //   this.stepper.next();
  // }

  // onSubmit() {
  //   return false;
  // }
  // constructor(
  //   @Inject('Window') private window: Window,
  //   ) { }

  //   @ViewChild('test') test:ElementRef
  //   @ViewChild('fecha') fecha:ElementRef
  //   @ViewChild('nombre') nombre:ElementRef
  //   download() {


    
  //     var id = document.getElementById("pdf");

  //     let test =this.test.nativeElement;
  //     let nombre =this.nombre.nativeElement;
  //     let fecha =this.fecha.nativeElement;
  //     var logo = new Image();

  //     logo.src = 'assets/Imagenes/logo.jpeg';
      
     



  //     var doc = new jsPDF({
      



  //     orientacion:'l',
  //     unit:'pt',
  //     format:'carta',
  //     posicioncion:2
  //     });
      
  //     doc.setFontSize(22);
  //     doc.setFontStyle('cursiva');
  //     doc.addImage(logo, 'JPEG', 15, 15, 60, 80);
  //     // doc.text("Lista de prueba \n",180,20);
  //         // doc.addPage();
  //     doc.fromHTML(id, 100,5);

  //     //mueve izq der ,baja
  //     doc.fromHTML(fecha.value, 135,2);
  //     doc.fromHTML(nombre.value, 260,595);
  //     doc.fromHTML(test.value, 354,654);
  //       // doc.text (60, 20, document.getElementById ( "fname" ) );
  //     doc.save('Test.pdf');
      
      
  //     // var doc = new jsPDF();
  //     // doc.text(20, 20, 'Hello world!');
  //     // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
  //     // doc.addPage();
  //     // doc.text(20, 20, 'Do you like that?');
      
  //     // // Save the PDF
  //     // doc.save('Test.pdf');
  //     }
  // ngOnInit() {
  //   this.stepper = new Stepper(document.querySelector('#stepper1'), {
  //     linear: false,
  //     animation: true
  //   })
  // }

  constructor(private authService: AuthService, private router: Router, private location: Location,private descuento: ConvocatoriaService) { }
  private user: UserInterface = {
    name: '',
    email: '',
    password: ''
  };
  public isError = false;
  public msgError = '';
  ngOnInit() {

this.getHeroes2();
   }
getHeroes2(): void {
  this.descuento.getCliente()
  .subscribe(docente => this.convocatorias = docente);
}
  onRegister(form: NgForm): void {
    if (form.valid) {
      this.authService
        .registerUser(this.user.name, this.user.email, this.user.password)
        .subscribe(user => {
          console.log(user);
          // this.authService.setUser(user);
          // const token = user.id;
          // this.authService.setToken(token);
          // this.router.navigate(['menu']);
          // location.reload();
        },
        res => {
          // this.msgError = res.error.error.details.messages.email;
          // this.onIsError();
        });
     } 

  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
  }
  