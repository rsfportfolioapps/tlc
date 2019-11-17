import { Injectable } from '@angular/core';
import { Observable, of, isObservable, scheduled } from 'rxjs';
import { Processes } from '../models/processes.model';

@Injectable()
export class ProcessesService {
  public getProcessesLibraray(): Observable<Processes[]> {
    return of([
      {
        id: 1,
        imgUrl: null,
        header: 'Lipsum dolor sit amet',
        subHeader: null,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [],
        actions: [{
          icon: 'archive.svg',
          text: ''
        },
        {
          icon: 'share.svg',
          text: ''
        }]
      },
      {
        id: 1,
        imgUrl: null,
        header: 'Contrary to popular belief',
        subHeader: null,
        description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [],
        actions: [{
          icon: 'archive.svg',
          text: ''
        },
        {
          icon: 'share.svg',
          text: ''
        }]
      },
      {
        id: 1,
        imgUrl: null,
        header: 'There are many variations of passages',
        subHeader: null,
        description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [],
        actions: [{
          icon: 'archive.svg',
          text: ''
        },
        {
          icon: 'share.svg',
          text: ''
        }]
      }
    ]);
  }

  public getProcesses(): Observable<Processes[]> {
    return of([
      {
        id: 1,
        imgUrl: null,
        header: 'Lipsum dolor sit amet',
        subHeader: null,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [],
        actions: [{
          icon: 'archive.svg',
          text: ''
        },
        {
          icon: 'share.svg',
          text: ''
        }]
      },
      {
        id: 1,
        imgUrl: null,
        header: 'Contrary to popular belief',
        subHeader: null,
        description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [],
        actions: [{
          icon: 'archive.svg',
          text: ''
        },
        {
          icon: 'share.svg',
          text: ''
        }]
      },
      {
        id: 1,
        imgUrl: null,
        header: 'There are many variations of passages',
        subHeader: null,
        description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [],
        actions: [{
          icon: 'archive.svg',
          text: ''
        },
        {
          icon: 'share.svg',
          text: ''
        }]
      }
    ]);
  }
}
