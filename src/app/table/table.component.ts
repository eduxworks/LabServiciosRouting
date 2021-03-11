/* tslint:disable:typedef-whitespace */
import { Component, OnInit } from '@angular/core';
import {PersonalService} from '../servicios/personal.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  interpolationTitle = 'NUESTRO EQUIPO';
  persona: any[] = [];
  constructor(private servicePersonal: PersonalService) {
    this.persona = servicePersonal.obtenerPersonal();
  }

  ngOnInit(): void {
  }

}
