import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AvalComponent } from './aval/aval.component';
import { DocenteComponent } from './docente/docente.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrarsemilleroComponent } from './registrarsemillero/registrarsemillero.component';
import { RequisitosComponent } from './requisitos/requisitos.component';
import { AppRoutingModule } from './app-routing.module';
import { PruebaComponent } from './prueba/prueba.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { TablaEstudianteComponent } from './tabla-estudiante/tabla-estudiante.component';
import { EstudiantesEditComponent } from './estudiantes-edit/estudiantes-edit.component';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { DocenteEditComponent } from './docente-edit/docente-edit.component';
import { ConvocatoriaEditComponent } from './convocatoria-edit/convocatoria-edit.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import {  Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service'


// import { DataApiService } from 'src/app/services/data-api.service';
// import { ModalComponent } from './components/modal/modal.component';
// import { TruncateTextPipe } from './pipes/truncate-text.pipe';

// const appRoutes:Routes = [
//   {
//     path: 'users',
//     pathMatch: 'full',
//     children: [
//       {
//         path: ':name',
//         component: UserComponent
//       }, 
//       {
//          path: ':name/:id',
//          component: UserComponent
//       }
//     ]
//   },
//   {
//     path: 'dashboard',
//     canActivate: [AuthguardGuard],
//     component: DashboardComponent
//   },
//   {
//     path: '',
//     redirectTo: 'users/mehulmpt/1',
//     pathMatch: 'prefix'
//     //component: LoginFormComponent,
//   }, 
//   {
//     path: '**',
//     component: NotfoundComponent
//   }
// ]



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AvalComponent,
    DocenteComponent,
    EstudiantesComponent,
    LoginComponent,
    MenuComponent,

    FilterPipe,
    RegistrarsemilleroComponent,
    RequisitosComponent,
    PruebaComponent,
    TablaEstudianteComponent,
    EstudiantesEditComponent,
    ConvocatoriaComponent,
    DocenteEditComponent,
    ConvocatoriaEditComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NotfoundComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false })

  ],

  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
