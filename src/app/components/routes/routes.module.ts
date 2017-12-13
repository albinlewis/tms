import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
{
  path: '', // default route
  // component:
},
{
  path: '',
  // component:
},
{
  path: '**', // page not found
  // component:
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutesModule { }
