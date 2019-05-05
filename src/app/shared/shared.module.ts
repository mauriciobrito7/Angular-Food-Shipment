
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';



@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ButtonsComponent],
  exports: [ButtonsComponent]
})
export class SharedModule {
  //
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}

