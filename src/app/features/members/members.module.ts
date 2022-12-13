import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { PrivateModule } from 'src/app/private/private.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MembersRoutingModule,
    PrivateModule,
    SharedModule
  ]
})
export class MembersModule { }
