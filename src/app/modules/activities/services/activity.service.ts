import { Injectable } from '@angular/core';
import { Observable, of, isObservable, scheduled } from 'rxjs';
import { Activity } from '../models/activity.model';

@Injectable()
export class ActivityService {
  public getActivities(): Observable<Activity[]> {
    return of([
      {
        id: 1,
        imgUrl: null,
        header: 'All boards (5)',
        subHeader: null,
        description: null,
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: 'score.svg',
          text: '20/100',
          class: 'score'
        },
        {
          icon: 'mandatory.svg',
          text: '10',
          class: 'mandatory'
        },
        {
          icon: 'time_icon.svg',
          text: '30m',
          class: 'clock'
        }],
        actions: [{
          icon: 'baseline-person-24px.svg',
          text: '21'
        },
        {
          icon: 'comment.svg',
          text: '102'
        }]
      },
      {
        id: 1,
        imgUrl: null,
        header: 'Market stuff board name',
        subHeader: null,
        description: '2 activities are due soon',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: 'score.svg',
          text: '10/20',
          class: 'score'
        },
        {
          icon: 'mandatory.svg',
          text: '10',
          class: 'mandatory'
        },
        {
          icon: 'score.svg',
          text: '10/20',
          class: 'yellow'
        }],
        actions: [{
          icon: 'users.svg',
          text: '21'
        }, {
          icon: 'activities.svg',
          text: '27'
        },
        {
          icon: 'archive.svg',
          text: ''
        }]
      },
      {
        id: 1,
        imgUrl: null,
        header: 'Suspendisse board',
        subHeader: null,
        description: null,
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: 'check_gray-1.svg',
          text: '10/20',
          class: 'green'
        },
        {
          icon: 'mandatory.svg',
          text: '10',
          class: 'mandatory'
        },
        {
          icon: 'score.svg',
          text: '10/20',
          class: 'yellow'
        }],
        actions: [{
          icon: 'users.svg',
          text: '21'
        }, {
          icon: 'activities.svg',
          text: '27'
        },
        {
          icon: 'archive.svg',
          text: ''
        }]
      }
    ]);
  }
}
