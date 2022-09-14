import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { UserlistComponent } from './userlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzStepsModule } from 'ng-zorro-antd/steps';
@NgModule({
  declarations: [UserlistComponent],
  exports: [UserlistComponent],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzStepsModule,
  ],
})
export class UserlistModule {}
