import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../reducers';
import { LoadContact } from '../store/actions/contact.actions';
import { getContactById } from '../store/selectors/contact.selectors';
import { Contact } from '../../shared/contact';

@Component({
  selector: 'ta-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact$: Observable<Contact | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit() {
    const id = Number(this.getId());

    this.contact$ = this.store.pipe(
      select(getContactById, { id })
    );

    this.store.dispatch(new LoadContact({ id: Number(id) }));
  }

  getId() {
    return this.route.snapshot.paramMap.get('id');
  }
}
