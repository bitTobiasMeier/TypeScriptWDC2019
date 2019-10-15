import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromContact from './store/reducers/contact.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './store/effects/contact.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    StoreModule.forFeature('contact', fromContact.reducer),
    EffectsModule.forFeature([ContactEffects])
  ],
  declarations: [
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailsComponent,
  ]
})
export class ContactsModule { }
