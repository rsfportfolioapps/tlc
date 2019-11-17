import { Contact } from '../../models/contact.model';
import { contactsActions, ContactsActionTypes } from '../actions/contacts.actions';

export interface ContactState {
  contacts?: Contact[];
}

const initialState: ContactState = {
  contacts: null,
};

export function ContactReducer(state: ContactState = initialState, action: contactsActions): ContactState {
  switch (action.type) {
    case ContactsActionTypes.LoadContacts:
      return Object.assign({}, state);

    case ContactsActionTypes.LoadContactSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getContacts = (state: ContactState) => {
  return state && state.contacts ? state.contacts: null;
};
