import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddaccountPageRoutingModule } from './addaccount-routing.module';

import { AddaccountPage } from './addaccount.page';
import { ErrorMessageComponent } from 'src/app/components/error-message/error-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddaccountPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddaccountPage,
    ErrorMessageComponent
  
  ]
})
export class AddaccountPageModule {}
