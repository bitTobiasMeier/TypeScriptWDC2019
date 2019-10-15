import { ContactActions, ContactActionTypes } from '../actions/contact.actions';

import { Contact } from '../../../shared/contact';
import { AdminActionTypes, AdminActions } from '../../../admin/store/actions/admin.actions';

export interface State {
  contacts: Contact[];
  loading: boolean;
}

export const initialState: State = {
  contacts: [],
  loading: false
};

export function reducer(state = initialState, action: ContactActions | AdminActions): State {
  switch (action.type) {
    case ContactActionTypes.LoadContacts: {
      return {
        ...state,
        loading: true
      };
    }

    case ContactActionTypes.LoadContactsSuccess: {
      return {
        ...state,
        contacts: action.payload.contacts,
        loading: false
      };
    }

    case ContactActionTypes.LoadContactSuccess: {
      const { contact } = action.payload;

      const contacts = [
        ...state.contacts.filter(b => b.id !== contact.id),
        contact
      ];

      return {
        ...state,
        contacts
      };
    }

    case AdminActionTypes.CreateContactSuccess: {
      const contacts = [...state.contacts, action.contact];

      return { ...state, contacts };
    }

    case AdminActionTypes.UpdateContactSuccess: {
      const contact = action.contact;
      const contacts = state.contacts.map(b => b.id === contact.id ? contact : b);

      return { ...state, contacts };
    }

    default:
      return state;
  }
}
