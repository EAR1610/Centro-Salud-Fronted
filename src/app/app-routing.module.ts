import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { MunicipioComponent } from './components/municipio/municipio.component';
import { NuevoMunicipioComponent } from './components/municipio/nuevo-municipio.component';
import { EditarMunicipioComponent } from './components/municipio/editar-municipio.component';

import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteNuevoComponent } from './components/paciente/paciente-nuevo.component';
import { PacienteEditarComponent } from './components/paciente/paciente-editar.component';
import { MedicoComponent } from './components/medico/medico.component';
import { VacunaComponent } from './components/vacuna/vacuna.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { CitaComponent } from './components/cita/cita.component';
import { CitaNuevoComponent } from './components/cita/cita-nuevo.component';

const routes: Routes = [
  { path:'', redirectTo : 'login', pathMatch:'full' },
  { path:'login', component: LoginComponent },
  
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
      },
      { path: 'municipio', component: MunicipioComponent },
      { path: 'nuevo-municipio', component: NuevoMunicipioComponent },
      { path: 'editar-municipio/:id', component: EditarMunicipioComponent },
    
      { path: 'paciente', component: PacienteComponent },
      { path: 'nuevo-paciente', component: PacienteNuevoComponent },
      { path: 'editar-paciente/:id', component: PacienteEditarComponent },

      { path: 'medico', component: MedicoComponent },
      { path: 'vacuna', component: VacunaComponent },
      { path: 'usuario', component: UsuarioComponent },
      
      { path: 'citas', component: CitaComponent },
      { path: 'nueva-cita', component: CitaNuevoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
