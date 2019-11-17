import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactState } from '../store/reducers/contacts.reducer';
import { Loadcontacts } from '../store/actions/contacts.actions';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  public assetImgPath: string = environment.assetImgPath;
  public hasSelection: boolean = false;
  public selectedContacts: Contact[] = [];

  constructor(private store: Store<ContactState>) {
    this.store.dispatch(new Loadcontacts());
  }

  public onSelectedContacts(contact: Contact): void {
    if (!this.onRemove(contact))
      this.selectedContacts.push(contact);
  }

  public onRemove(contact: Contact): boolean {
    const index: number = this.selectedContacts.indexOf(contact);
    if (index !== -1) {
      this.selectedContacts.splice(index, 1);
      return true;
    }
    return false;
  }


  ngOnInit(): void { }
}
