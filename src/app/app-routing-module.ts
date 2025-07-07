import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './paginas/layout/layout';


const routes: Routes = [
  {path: '', component: Layout}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
