import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { State } from '../../reducers'; // Root State!
import { LoadContacts } from '../store/actions/contact.actions';
import { getAllContacts, getContactsLoading } from '../store/selectors/contact.selectors';
import { Contact } from '../../shared/contact';
import { logMethod } from 'src/app/shared/log.decorator';
import { LoghelperService } from 'src/app/shared/loghelper.service';

@Component({
  selector: 'ta-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>, private loghelper: LoghelperService) {
    this.contacts$ = this.store.pipe(select(getAllContacts));
    this.loading$ = this.store.pipe(select(getContactsLoading));
    this.loghelper.log ('abc');
    this.loghelper.log ([1, 3, 4, new Date(Date.now())]);
   }

  @logMethod
  ngOnInit() {
    this.store.dispatch(new LoadContacts());
  }
}
