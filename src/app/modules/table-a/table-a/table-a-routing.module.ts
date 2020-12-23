import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableAComponent } from './table-a.component';

export const routesTable: Routes = [
  {
    path: '',
    component: TableAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesTable)],

  exports: [RouterModule]
})
export class TableARoutingModule { }
