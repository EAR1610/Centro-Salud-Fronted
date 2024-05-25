import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PaginiComponent } from './Pag_ini/pagini/pagini.component';
import { MunicipioComponent } from './components/municipio/municipio.component';
import { NuevoMunicipioComponent } from './components/municipio/nuevo-municipio.component';
import { EditarMunicipioComponent } from './components/municipio/editar-municipio.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteNuevoComponent } from './components/paciente/paciente-nuevo.component';
import { PacienteEditarComponent } from './components/paciente/paciente-editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { MedicoComponent } from './components/medico/medico.component';
import { VacunaComponent } from './components/vacuna/vacuna.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    PaginiComponent,
    MunicipioComponent,
    NuevoMunicipioComponent,
    EditarMunicipioComponent,
    PacienteComponent,
    PacienteNuevoComponent,
    PacienteEditarComponent,
    MedicoComponent,
    VacunaComponent,
    UsuarioComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    SidebarModule,
    AvatarModule,
    HttpClientModule,
    TableModule,
    CommonModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
