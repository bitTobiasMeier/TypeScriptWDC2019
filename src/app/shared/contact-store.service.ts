import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { Contact, NewContact } from './contact';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ContactStoreService {
  private contacts: Contact [] = [
     {firstname: 'Anna', lastname: 'Musterfrau', id: 1},
     {firstname: 'Max', lastname: 'Mustermann', id: 2},
     {firstname: 'Tobias', lastname: 'Meier', id: 3}
  ];
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Contact[]> {
    return of(this.contacts);
  }

  getSingle(id: number): Observable<Contact | undefined> {
    return this.getAll().pipe(
      map(c => c.find(contact => contact.id === id)),
      catchError(this.errorHandler)
    );
  }

  create(contact: NewContact): Observable<Contact> {
    // Simuliere Backend, wo dann die id generiert wird.
    const newContact =  contact as Contact;
    newContact.id = this.contacts.length + 1;
    this.contacts.push(newContact);
    return of (newContact);
  }

  update(contact: Contact): Observable<Contact> {
    if (this.contacts) {
      const oldContact = this.contacts.filter(c => c.id === contact.id)[0];
      if (oldContact) {
        oldContact.firstname = contact.firstname;
        oldContact.lastname = contact.lastname;
        return of (oldContact);
      }
    }
    return of ({firstname: '', lastname: '', id: undefined});
  }



  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }
}
