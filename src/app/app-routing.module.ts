import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MycardsComponent} from './mycards/mycards.component';
import {AcordionComponent} from './acordion/acordion.component';
import {TableComponent} from './table/table.component';
import {MyPortfolioComponent} from './my-portfolio/my-portfolio.component';
import {MyformComponent} from './myform/myform.component';


const  routes: Routes = [
  {path: 'mycards', component: MycardsComponent},
  {path: 'acordion', component: AcordionComponent},
  {path: 'table', component: TableComponent},
  {path: 'myportafolio', component: MyPortfolioComponent},
  {path: 'myform', component: MyformComponent},
  {path: '', redirectTo: '/mycards', pathMatch: 'full'}
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

/*
<app-mycards *ngIf="opcionMenu==1"></app-mycards>
<app-acordion *ngIf="opcionMenu==1"></app-acordion>
<app-table *ngIf="opcionMenu==2"></app-table>
<app-my-portfolio *ngIf="opcionMenu==3"></app-my-portfolio>
<app-myform *ngIf="opcionMenu==4"></app-myform>
<app-my-footer></app-my-footer>
 */
