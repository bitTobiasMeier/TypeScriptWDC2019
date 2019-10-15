import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Contact } from '../../shared/contact';
import { State } from '../../reducers';
import { CreateContact as CreateContact } from '../store/actions/admin.actions';

@Component({
  selector: 'ta-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  createContact(contact: Contact) {
    this.store.dispatch(CreateContact({ contact }));
  }

}

