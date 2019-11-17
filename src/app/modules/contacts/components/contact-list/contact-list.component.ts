import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { Store, select } from '@ngrx/store';
import { ContactState } from '../../store/reducers/contacts.reducer';
import { getContactSelector } from '../../store/selectors/contacts.selector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts$: Observable<Contact[]>;
  public assetSvgPath: string = environment.assetSvgPath;
  public assetImgPath: string = environment.assetImgPath;
  public selectedRowIndexArr: Contact[] = [];
  public hasSelection: boolean = false;

  @Output()
  public changeEmitter = new EventEmitter<Contact>();

  constructor(private store: Store<ContactState>) {
    this.contacts$ = this.store.pipe(select(getContactSelector));
  }

  public select(contact: Contact): void {
    this.changeEmitter.emit(contact);
  }

  ngOnInit(): void { }
}
