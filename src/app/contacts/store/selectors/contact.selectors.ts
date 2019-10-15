import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State as ContactState } from '../reducers/contact.reducer';
import { Contact } from 'src/app/shared/contact';

export const getContactState = createFeatureSelector<ContactState>('contact');

export const getContactsLoading = createSelector(
  getContactState,
  state => state.loading
);

export const getAllContacts = createSelector(
  getContactState,
  state => {
    if (state) {
      return state.contacts;
    }
    return [];
  }
);

export const getContactById = createSelector(
  getAllContacts,
  (contacts: Contact[], props: {id: number}) => {
    return contacts.find(b => b.id === props.id);
  }
);
