import { Component } from '@angular/core';
import { Convocatoria } from '../models/convocatoria';
import { ConvocatoriaService } from '../services/convocatoria.service';

import { isError } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private descuentoService: ConvocatoriaService) { }
  convocatorias:Convocatoria[];
  ngOnInit() {

    this.getHeroes();
  }
  public isError = false;



  getHeroes(): void {

  
    this.descuentoService.getCliente()
    .subscribe(estudiante => this.convocatorias = estudiante);


  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


}
