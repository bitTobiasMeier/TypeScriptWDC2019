import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Contact } from '../../shared/contact';
import { State } from '../../reducers';
import { LoadContact } from 'src/app/contacts/store/actions/contact.actions';
import { UpdateContact } from '../store/actions/admin.actions';
import { getContactById } from 'src/app/contacts/store/selectors/contact.selectors';
import { logMethod } from 'src/app/shared/log.decorator';

@Component({
  selector: 'ta-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact$: Observable<Contact | undefined> | undefined;

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contact$ = this.store.pipe(select(getContactById, { id }));
    this.store.dispatch(new LoadContact({ id }));
  }

  @logMethod
  updateContact(contact: Contact) {
    contact.id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(UpdateContact({ contact }));
  }

}
