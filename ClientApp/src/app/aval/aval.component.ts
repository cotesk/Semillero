import { Component, OnInit, ViewChild, ElementRef , Inject, Input} from '@angular/core';
import * as  jsPDF from 'jspdf';
import { SolicitudAvalService } from '../services/solicitud-aval.service';
import { SolicitarAval } from '../models/solicitar-aval';

import { Docente } from '../models/Docente';
import { DocenteService } from '../services/docente.service';
import { Convocatoria } from '../models/convocatoria';
import { ConvocatoriaService } from '../services/convocatoria.service';
import { isError } from 'util';
@Component({
  selector: 'app-aval',
  templateUrl: './aval.component.html',
  styleUrls: ['./aval.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class AvalComponent implements OnInit{

  // private descuentoService: SolicitudAvalService,

  constructor(  private descuento: DocenteService,
    @Inject('Window') private window: Window
) { }

    solicitarAval: SolicitarAval;
    solicitarAvals:SolicitarAval[];

    public isError = false;
    docentes: Docente[];
    convocatorias: Convocatoria[];
    @ViewChild('test') test:ElementRef
    @ViewChild('fecha') fecha:ElementRef
    @ViewChild('nombre') nombre:ElementRef

    download() {


    
      var id = document.getElementById("pdf");

      let test =this.test.nativeElement;
      let nombre =this.nombre.nativeElement;
      let fecha =this.fecha.nativeElement;
      var logo = new Image();

      logo.src = 'assets/Imagenes/logo.jpeg';
      
     



      var doc = new jsPDF({
      



      orientacion:'l',
      unit:'pt',
      format:'carta',
      posicioncion:2
      });
      
      doc.setFontSize(22);
      doc.setFontStyle('cursiva');
      doc.addImage(logo, 'JPEG', 15, 15, 60, 80);
      // doc.text("Lista de prueba \n",180,20);
          // doc.addPage();
      doc.fromHTML(id, 100,5);

      //mueve izq der ,baja
      doc.fromHTML(fecha.value, 135,45);
      doc.fromHTML(nombre.value, 276,636);
      doc.fromHTML(test.value, 355,695);
        // doc.text (60, 20, document.getElementById ( "fname" ) );
      doc.save('SolicitudAval.pdf');
      
      
      // var doc = new jsPDF();
      // doc.text(20, 20, 'Hello world!');
      // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
      // doc.addPage();
      // doc.text(20, 20, 'Do you like that?');
      
      // // Save the PDF
      // doc.save('Test.pdf');
      }


ngOnInit() {

  // this.getHeroes();
  this.getHeroes2();
}
// getHeroes(): void {
//   this.descuentoService.getCliente()
//   .subscribe(estudiante => this.solicitarAvals = estudiante);
// }

// getHeroes2(): void {
//   this.descuento.getCliente()
//   .subscribe(docente => this.docentes = docente);
// }

onIsError(): void {
  this.isError = true;
  setTimeout(() => {
    this.isError = false;
  }, 4000);
}

getHeroes2(): void {
  this.descuento.getCliente()
  .subscribe(docente => this.docentes = docente);
}


// guardar(){

//   this.descuentoService.addDocente(this.solicitarAval)
//   .subscribe(task => {
//     alert('Se agrego un nuevo contrato')
//     this.getHeroes();
//   });
// }



}




