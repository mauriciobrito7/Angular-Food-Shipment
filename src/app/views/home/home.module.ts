import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
