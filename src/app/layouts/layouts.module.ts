import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    FrontLayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,


  ]
})
export class LayoutsModule { }
