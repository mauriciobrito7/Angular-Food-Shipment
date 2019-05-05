import { MainContentComponent } from './shell/main-content/main-content.component';
import { ShellComponent } from './shell/shell.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './shell/top-bar/top-bar.component';



/*Rutas principales de la app para cada componente principal de la aplicación */
const routes: Routes = [
  {
    path: '',
    loadChildren: './../views/home/home.module#HomeModule'
  },
  {
    path: 'login',
    loadChildren: './../views/login/login.module#LoginModule'
  },
  {
    path: 'guide',
    loadChildren: './../views/style-guide/style-guide.module#StyleGuideModule'
  }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule.forRoot()
  ],
  declarations: [ShellComponent, MainContentComponent, TopBarComponent],
  exports: [ShellComponent]
})
export class CoreModule {}

