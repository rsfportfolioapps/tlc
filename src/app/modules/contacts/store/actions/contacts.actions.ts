import { Action } from '@ngrx/store';

export enum ContactsActionTypes {
  LoadContacts = '[contacts] Load contacts',
  LoadContactSuccess = '[contacts] Load contacts (success)'
}

export class Loadcontacts implements Action {
  readonly type = ContactsActionTypes.LoadContacts;
}

export class LoadcontactSuccess implements Action {
  readonly type = ContactsActionTypes.LoadContactSuccess;

  constructor(public payload: any) { }
}

export type contactsActions = Loadcontacts | LoadcontactSuccess;
