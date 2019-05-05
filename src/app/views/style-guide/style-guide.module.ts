import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: GuideComponent
  }
];

@NgModule({
  declarations: [GuideComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ]
})
export class StyleGuideModule { }
