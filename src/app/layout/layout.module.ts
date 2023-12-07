import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';



@NgModule({
  declarations: [
    NavComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
