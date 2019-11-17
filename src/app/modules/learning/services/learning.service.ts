import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Learning } from '../models/learning.model';

@Injectable()
export class LearningService {
  public getLearnMore(): Observable<Learning[]> {
    return of([
      {
        id: 1,
        type: null,
        title: 'Understanding alternatives',
        imgUrl: 'assets/images/due-soonest-1.png',
        description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
        subDescription: '',
        dueDate: null,
        header: '',
        subHeader: '',
        badges: [{
          icon: 'time_icon.svg',
          text: '30m',
          class: 'clock'
        }],
        actions: []
      },
      {
        id: 2,
        type: null,
        title: 'Gearing and Margin Lending',
        imgUrl: 'assets/images/assigned-learning-1.png',
        description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
        subDescription: null,
        dueDate: 'Due Sunday, 31 March 2019 at 4:30PM',
        badges: [{
          icon: 'score.svg',
          text: '1',
          class: 'score'
        },
        {
          icon: 'time_icon.svg',
          text: '30m',
          class: 'clock'
        },
        {
          icon: 'mandatory.svg',
          text: 'Mandatory',
          class: 'mandatory'
        }],
        actions: []
      },
      {
        id: 2,
        type: 1,
        title: 'Understanding alternatives',
        imgUrl: 'assets/images/assigned-learning-2.png',
        description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
        subDescription: 'Due Sunday, 31 March 2019 at 4:30PM',
        dueDate: 'Due today 4:30 PM',
        badges: [{
          icon: 'score.svg',
          text: '0/4',
          class: 'score'
        },
        {
          icon: 'score.svg',
          text: '0/3',
          class: 'clock'
        },
        {
          icon: 'score.svg',
          text: 'Certificate',
          class: 'certificate'
        },
        {
          icon: 'mandatory.svg',
          text: 'Mandatory',
          class: 'mandatory'
        }],
        actions: []
      }
    ]);
  }

  public getCompletedLearning(): Observable<Learning[]> {
    return of([
      {
        id: 1,
        type: null,
        title: 'Understanding alternatives',
        imgUrl: 'assets/images/due-soonest-1.png',
        description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
        subDescription: '',
        dueDate: null,
        header: '',
        subHeader: '',
        badges: [{
          icon: 'time_icon.svg',
          text: '30m',
          class: 'clock'
        }],
        actions: []
      },
      {
        id: 2,
        type: null,
        title: 'Gearing and Margin Lending',
        imgUrl: 'assets/images/assigned-learning-1.png',
        description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
        subDescription: null,
        dueDate: 'Due Sunday, 31 March 2019 at 4:30PM',
        badges: [{
          icon: 'score.svg',
          text: '1',
          class: 'score'
        },
        {
          icon: 'time_icon.svg',
          text: '30m',
          class: 'clock'
        },
        {
          icon: 'mandatory.svg',
          text: 'Mandatory',
          class: 'mandatory'
        }],
        actions: []
      },
      {
        id: 2,
        type: 1,
        title: 'Understanding alternatives',
        imgUrl: 'assets/images/assigned-learning-2.png',
        description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
        subDescription: 'Due Sunday, 31 March 2019 at 4:30PM',
        dueDate: 'Due today 4:30 PM',
        badges: [{
          icon: 'score.svg',
          text: '0/4',
          class: 'score'
        },
        {
          icon: 'score.svg',
          text: '0/3',
          class: 'clock'
        },
        {
          icon: 'score.svg',
          text: 'Certificate',
          class: 'certificate'
        },
        {
          icon: 'mandatory.svg',
          text: 'Mandatory',
          class: 'mandatory'
        }],
        actions: []
      }
    ]);
  }

  public getAssignedLearnings(): Observable<Learning[]> {
    return of([
      {
        id: 1,
        type: 1,//category type
        title: 'Gearing and Margin Lending',
        imgUrl: 'assets/images/common-img.png',
        description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
        subDescription: '',
        dueDate: null,
        header: '',
        subHeader: '',
        badges: [{
          icon: 'time_icon.svg',
          text: '30m',
          class: 'clock'
        }],
        actions: []
      },
      {
        id: 2,
        type: null,
        title: 'Gearing and Margin Lending',
        imgUrl: 'assets/images/due-soonest-1.png',
        description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
        subDescription: null,
        dueDate: 'Due Sunday, 31 March 2019 at 4:30PM',
        badges: [{
          icon: 'score.svg',
          text: '1',
          class: 'score'
        },
        {
          icon: 'time_icon.svg',
          text: '30m',
          class: 'clock'
        },
        {
          icon: 'mandatory.svg',
          text: 'Mandatory',
          class: 'mandatory'
        }],
        actions: []
      },
      {
        id: 2,
        type: 2, //category type
        title: 'Understanding alternatives',
        imgUrl: 'assets/images/assigned-learning-2.png',
        description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
        subDescription: 'Due Sunday, 31 March 2019 at 4:30PM',
        dueDate: 'Due today 4:30 PM',
        badges: [{
          icon: 'score.svg',
          text: '0/4',
          class: 'score'
        },
        {
          icon: 'score.svg',
          text: '0/3',
          class: 'clock'
        },
        {
          icon: 'score.svg',
          text: 'Certificate',
          class: 'certificate'
        },
        {
          icon: 'mandatory.svg',
          text: 'Mandatory',
          class: 'mandatory'
        }],
        actions: []
      }
    ]);
  }
}
