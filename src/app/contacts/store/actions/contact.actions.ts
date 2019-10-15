import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Contact } from '../../../shared/contact';

export enum ContactActionTypes {
  LoadContacts = '[Contact] Load Contacts',
  LoadContactsSuccess = '[Contact] Load Contacts Success',
  LoadContactsFailure = '[Contact] Load Contacts Failure',
  LoadContact = '[Contact] Load Contact',
  LoadContactSuccess = '[Contact] Load Contact Success',
  LoadContactFailure = '[Contact] Load Contact Failure'
}

export class LoadContacts implements Action {
  readonly type = ContactActionTypes.LoadContacts;
}

export class LoadContactsSuccess implements Action {
  readonly type = ContactActionTypes.LoadContactsSuccess;
  constructor(public payload: { contacts: Contact[] }) { }
}

export class LoadContactsFailure implements Action {
  readonly type = ContactActionTypes.LoadContactsFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export class LoadContact implements Action {
  readonly type = ContactActionTypes.LoadContact;
  constructor(public payload: { id: number }) {}
}

export class LoadContactSuccess implements Action {
  readonly type = ContactActionTypes.LoadContactSuccess;
  constructor(public payload: { contact: Contact }) {}
}

export class LoadContactFailure implements Action {
  readonly type = ContactActionTypes.LoadContactFailure;
  constructor(public payload: { error: HttpErrorResponse }) {}
}


export type ContactActions =
  | LoadContacts
  | LoadContactsSuccess
  | LoadContactsFailure
  | LoadContact
  | LoadContactSuccess
  | LoadContactFailure;
