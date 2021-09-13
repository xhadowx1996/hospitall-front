import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPacienteComponent } from './views/ingresar-paciente/ingresar-paciente.component';

const routes: Routes = [

  {  path : '' , component : IngresarPacienteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
