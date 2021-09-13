import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-ingresar-paciente',
  templateUrl: './ingresar-paciente.component.html',
  styleUrls: ['./ingresar-paciente.component.css']
})
export class IngresarPacienteComponent implements OnInit {

  mayores: Array<any> = [];
  fumadores : Array<any> = [];

  constructor(private service: ApiRestService) { }

  ngOnInit(): void {
    this.MayoresDe40();
    this.Fumadores();
  }


  MayoresDe40() {
    try {
      this.service.ListarPacientesViejos().subscribe((data: any) => {
        data.forEach((paciente: any) => {
          let edad = parseInt(paciente.Edad);
          if (edad > 39) {
            this.mayores.push(paciente);
          }
        });
        //console.log(this.mayores);
      })
    } catch (error) {

    }
  }

  RegistarPaciente() {
    let data = {
      "Nombre": (document.getElementById('nombre') as HTMLInputElement).value,
      "Edad": (document.getElementById('edad') as HTMLInputElement).value,
      "Peso": (document.getElementById('peso') as HTMLInputElement).value,
      "Estatura": (document.getElementById('estatura') as HTMLInputElement).value,
      "Descripcion": (document.getElementById('descripcion') as HTMLInputElement).value,
      "Prioridad": (document.getElementById('prioridad') as HTMLInputElement).value,
      "Fuma": (document.getElementById('fuma') as HTMLInputElement).value,
      "Dieta": (document.getElementById('dieta') as HTMLInputElement).value,
      "HistoriaClinicas": (document.getElementById('historias') as HTMLInputElement).value
    };
    this.service.AgregarPaciente(data).subscribe((data : any)=>{
      console.log(data);

    })
  }


  Fumadores(){
    this.service.Fumadores().subscribe((data : any) =>{
      this.fumadores = data;
    })
  }




}
