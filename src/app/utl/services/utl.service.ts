import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/alumnos-utl';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl[]=[
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
  ] 
  get alumnos():AlumnosUtl[]{
    return [...this._alumnosUtl]
  }

  constructor() { }
  agregarNuevoAlumno(argumento:AlumnosUtl){ //argumento es una variable
    this._alumnosUtl.push(argumento);
  
  } 

  muestra(){
    console.log('nombre');
  }
}
