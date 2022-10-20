import { Component } from '@angular/core';
import { AlumnosUtl } from '../interfaces/alumnos-utl';
import { UtlService } from '../services/utl.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  /* alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Mario',
      edad:22
    },
    {
      nombre:'Sandra',
      edad:25
    },
    {
      nombre:'Brenda',
      edad:36
    },
  ] */


constructor(){}
regAlum:AlumnosUtl={
  nombre:'',
  edad:0
} 

/* agregarNuevoAlumno(argumento:AlumnosUtl){ //argumento es una variable
  this.alumnosUtl.push(argumento);
  this.UtlService.muestra();

} */


/*   agregar():void{
    console.log(this.regAlum);
    this.alumnosUtl.push(this.regAlum);
    this.regAlum={
      nombre:'',
      edad:0
    }
  } */

}
//EL padre es el main y el hijo es alumnos
//Comunicación entre componentes ES EL TEMA