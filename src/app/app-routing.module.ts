import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { TableARoutingModule , routesTable} from './modules/table-a/table-a/table-a-routing.module';
import { TableAComponent } from './modules/table-a/table-a/table-a.component';

const routes: Routes = [
  {

    path: '',
    // children: [...routesTable]
    loadChildren: () =>
      import('../app/modules/table-a/table-a/table-a.module').then(
        (m) => m.TableAModule
      ),
    // component: TableAComponent,
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
