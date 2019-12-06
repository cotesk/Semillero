import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarsemilleroComponent } from './registrarsemillero/registrarsemillero.component';
import { LoginComponent } from './login/login.component';
import { RequisitosComponent } from './requisitos/requisitos.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AvalComponent } from './aval/aval.component';

import { PruebaComponent } from './prueba/prueba.component';
import { DocenteComponent } from './docente/docente.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { TablaEstudianteComponent } from './tabla-estudiante/tabla-estudiante.component';
import { EstudiantesEditComponent } from './estudiantes-edit/estudiantes-edit.component';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { DocenteEditComponent } from './docente-edit/docente-edit.component';
import { ConvocatoriaEditComponent } from './convocatoria-edit/convocatoria-edit.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  { path:'login', component:LoginComponent },
  { path:'requisito', component:RequisitosComponent },
  { path:'home', component:HomeComponent },
  { path:'menu', component:MenuComponent },
  { path:'aval', component:AvalComponent },
  { path:'registrar', component:RegistrarsemilleroComponent },
  { path:'estudiante', component:EstudiantesComponent },
  { path:'docente', component:DocenteComponent },
  { path:'prueba', component:PruebaComponent },
  { path:'tablaestudiante', component:TablaEstudianteComponent },
  { path:'editarestudiante/:id', component:EstudiantesEditComponent },
  { path:'docenteedit/:id', component:DocenteEditComponent },
  { path:'convocatoriaedit/:id', component:ConvocatoriaEditComponent },
  { path:'convocatoria', component:ConvocatoriaComponent },
  // { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  ];

  export const appRoutingModule = RouterModule.forRoot(routes);

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRoutingModule { }
