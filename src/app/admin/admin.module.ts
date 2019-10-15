import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { AdminRoutingModule } from './admin-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './store/reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/effects/admin.effects';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule,
    StoreModule.forFeature('admin', fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects])
  ],
  declarations: [
    ContactFormComponent,
    CreateContactComponent,
    EditContactComponent,
  ]
})
export class AdminModule { }
