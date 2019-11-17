import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { ContactsActionTypes } from '../actions/contacts.actions';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contacts.service';

@Injectable()
export class ContactsEffects {
  constructor(private actions$: Actions, private contactService: ContactService) { }

  @Effect()
  public loadContacts$: Observable<any> = this.actions$.pipe(
    ofType(ContactsActionTypes.LoadContacts),
    mergeMap((action: any) => zip(
      this.contactService.getContacts()
    ).pipe(
      map(([contacts]) => {
        return {
          type: ContactsActionTypes.LoadContactSuccess,
          payload: this.formatResponse(contacts)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    contacts?: Contact[]): any {
    return {
      contacts
    };
  }
}