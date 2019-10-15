import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap } from 'rxjs/operators';
import { ContactStoreService } from 'src/app/shared/contact-store.service';
import { UpdateContact, UpdateContactSuccess, CreateContact, CreateContactSuccess, AdminActions } from '../actions/admin.actions';

@Injectable()
export class AdminEffects {

  @Effect()
  updateContact$ = this.actions$.pipe(
    ofType(UpdateContact),
    map(action => {
      return action.contact;
    }),
    mergeMap(contact =>
      this.contactStoreService.update(contact).pipe(
        map(() => UpdateContactSuccess({ contact })),
        tap(() => this.router.navigate(['/contacts']))
      )
    )
  );

  @Effect()
  createContact$ = this.actions$.pipe(
    ofType(CreateContact),
    map(action => action.contact),
    mergeMap(contact =>
      this.contactStoreService.create(contact).pipe(
        map((newContact) => CreateContactSuccess({ contact: newContact })),
        tap((result) => this.router.navigate(['/contacts', result.contact.id]))
      )
    )
  );

  constructor(
    private actions$: Actions<AdminActions>,
    private contactStoreService: ContactStoreService,
    private router: Router) {}

}
