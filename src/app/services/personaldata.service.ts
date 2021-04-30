import { Injectable } from '@angular/core';
import { Datos } from '../models/profile'
@Injectable({
  providedIn: 'root'
})
export class PersonaldataService {
  // Datos: datos[]
  tasks: Datos[];
  constructor() {
    this.tasks = [
      // {id:'1', name:'Jose', lastname:'Moreno', sex:'M', direction:'HERRERA', dateNac:'1/1/1', Nacionality:'Panameña', dateExpd:'2/2/2', dateCadu:'3/3/3'}
    ]


  }

  getInfoPersonal(){
    if (localStorage.getItem('MyArray') === null) {
      return this.tasks;
    } else {
      this.tasks = JSON.parse(localStorage.getItem('MyArray') || '{}')
      return this.tasks;
    }


  }

  addInforPersonal(task: Datos){
    this.tasks.push(task)
    let tasks:Datos [] = [];
    if (localStorage.getItem('MyArray') === null) {
      tasks.push(task)
    localStorage.setItem('MyArray', JSON.stringify(tasks))
    } else {
      tasks = JSON.parse(localStorage.getItem('MyArray')!);
      tasks.push(task)
      localStorage.setItem('MyArray', JSON.stringify(tasks))
    }

    // this.Datos.push(dato);
    // let tasks: datos[]=[];
    // if (localStorage.getItem('Array') === null) {
    //     tasks.push(dato)
    //     localStorage.setItem('Array',JSON.stringify(tasks));
    //   }else{
    //     tasks = JSON.parse(localStorage.getItem('Array') || '{}');
    //     tasks.push(dato)
    //     localStorage.setItem("Array", JSON.stringify(tasks))
    //   }
  }
}
