import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  ContactActionTypes,
  ContactActions,
  LoadContactsSuccess,
  LoadContactsFailure,
  LoadContactSuccess,
  LoadContactFailure,
} from '../actions/contact.actions';
import { ContactStoreService } from 'src/app/shared/contact-store.service';

@Injectable()
export class ContactEffects {

  @Effect()
  loadContacts$ = this.actions$.pipe(
    ofType(ContactActionTypes.LoadContacts),
    switchMap(() =>
      this.contactStoreService.getAll().pipe(
        map(contacts => new LoadContactsSuccess({ contacts })),
        catchError(error => of(new LoadContactsFailure({ error }))))
    )
  );

  @Effect()
  loadContact$ = this.actions$.pipe(
    ofType(ContactActionTypes.LoadContact),
    map(action => {
      return action.payload.id;
    }),
    mergeMap(id => this.contactStoreService.getSingle(id).pipe(
      map(contact => {
        if (! contact) {
          throw new Error('contact not found');
        }
        return new LoadContactSuccess({ contact });
      }),
      catchError(error => of(new LoadContactFailure({ error })))
    ))
  );


  constructor(
    private actions$: Actions<ContactActions>,
    private contactStoreService: ContactStoreService  ) {}

}
