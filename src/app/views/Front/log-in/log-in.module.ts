import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule
  ]
})
export class LogInModule { }
