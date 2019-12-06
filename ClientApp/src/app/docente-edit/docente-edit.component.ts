import { Component, OnInit } from '@angular/core';

import { Docente } from '../models/docente';
import { Location } from '@angular/common';
import { ActivatedRoute } from'@angular/router';
import { DocenteService } from '../services/docente.service';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-docente-edit',
  templateUrl: './docente-edit.component.html',
  styleUrls: ['./docente-edit.component.css']
})
export class DocenteEditComponent implements OnInit {

  docente:Docente;
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
  private docenteService: DocenteService,
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
  this.docenteService.get(id)
  .subscribe(hero => this.docente = hero);
  }
  update(): void {
  this.docenteService.update(this.docente)
  .subscribe(() => this.goBack());
  }
  delete(): void {
  this.docenteService.delete(this.docente)
  .subscribe(() => this.goBack());
  }
  goBack(): void {
  this.location.back();
  }
}
