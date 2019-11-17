import { createSelector } from '@ngrx/store';
import * as fromContacts from '../reducers/contacts.reducer';

export const ContactSelectorState = (state) => state.contacts;

export const getContactSelector = createSelector(
  ContactSelectorState,
  fromContacts.getContacts
);
