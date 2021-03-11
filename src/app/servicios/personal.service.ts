import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  personal: any[] = [
    {id: '1', nombres: 'José', apellidos: 'Vergelin', cargo: 'DISEÑADOR UX/UI', email: 'jvergelin@4devps.com'},
    {id: '2', nombres: 'Fausto', apellidos: 'Oviedo', cargo: 'DISEÑADOR GRÁFICO', email: 'foviedo@4devps.com'},
    {id: '3', nombres: 'Augusto', apellidos: 'Basantes', cargo: 'MARKETING', email: 'abasantes@4devps.com'},
    {id: '4', nombres: 'Eduardo', apellidos: 'Grijalva', cargo: 'DESARROLLADOR', email: 'foviedo@4devps.com'}
    ];
  constructor() {}
  // tslint:disable-next-line:typedef
  obtenerPersonal(){
    return this.personal;
  }
}
