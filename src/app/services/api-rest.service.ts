import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  url : String = 'http://localhost:8000';

  constructor( private http : HttpClient ) { }


  ListarPacientesViejos(){

    return this.http.get(this.url+'/hospital/PacienteViejo');

  }

  AgregarPaciente(data : any){
    return this.http.post(this.url+'/hospital/paciente',data );
  }

  Fumadores(){
    return this.http.get(this.url+'/hospital/pacientefumador');
  }


}
