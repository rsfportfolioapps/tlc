import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
  public getContacts(): Observable<Contact[]> {
    return of([
      {
        id: 1,
        img: 'p1.png',
        name: 'Jenny and Lucy!'
      },
      {
        id: 2,
        img: 'p2.png',
        name: 'Francis Paramore'
      },
      {
        id: 3,
        img: 'p3.png',
        name: 'Timika Morris'
      },
      {
        id: 4,
        img: 'p4.png',
        name: 'Wen Rochin'
      },
      {
        id: 5,
        img: 'p5.png',
        name: 'Socorro Quinton'
      },
      {
        id: 6,
        img: 'p6.png',
        name: 'Domonique Constante'
      },
      {
        id: 7,
        img: 'p7.png',
        name: 'Marilynn Blalock'
      }
    ])
  }


}