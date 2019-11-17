import { Injectable } from '@angular/core';
import { MyDiscussion } from '../models/discussion.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class DiscussionService {

  public getDiscussionNewest(): Observable<MyDiscussion[]> {
    return of([
      {
        id: 1,
        imgUrl: 'assets/images/my-discussion-1.png',
        header: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
        smallHeader: 'Request to join',
        subHeader: null,
        description: null,
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: '',
          text: 'Content related',
          class: 'green'
        },
        {
          icon: '',
          text: 'Learning session with John doe',
          class: ''
        }],
        actions: [{
          icon: 'baseline-person-24px.svg',
          text: '21'
        },
        {
          icon: 'comment.svg',
          text: '102'
        },
        {
          icon: 'baseline-share-24px.svg',
          text: 'share'
        },
        {
          icon: 'bookmark_dark.svg',
          text: 'save',
          type: 1 // 1 == save, 2 === share
        }]
      },
      {
        id: 2,
        imgUrl: 'assets/images/my-discussion-2.png',
        header: 'Excepteur sint occaecat cupidatat non proident',
        smallHeader: '',
        subHeader: null,
        description: null,
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: '',
          text: 'General',
          class: 'cyan'
        }],
        actions: [{
          icon: 'baseline-person-24px.svg',
          text: '21'
        },
        {
          icon: 'comment.svg',
          text: '102'
        },
        {
          icon: 'baseline-share-24px.svg',
          text: 'share'
        },
        {
          icon: 'bookmark_dark.svg',
          text: 'save',
          type: 1 
        }]
      }
    ]);
  }

  public getMyDiscussions(): Observable<MyDiscussion[]> {
    return of([
      {
        id: 1,
        imgUrl: 'assets/images/my-discussion-1.png',
        header: 'Me, Jenny Doe, and Jessy Cales',
        smallHeader: 'Private discussion',
        subHeader: null,
        description: null,
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: '',
          text: 'General',
          class: 'green'
        }],
        actions: [{
          icon: 'baseline-person-24px.svg',
          text: '21'
        },
        {
          icon: 'comment.svg',
          text: '102'
        },
        {
          icon: 'baseline-share-24px.svg',
          text: 'share'
        },
        {
          icon: 'bookmark_dark.svg',
          text: 'save',
          type: 1 // 1 == save, 2 === share
        }]
      },
      {
        id: 2,
        imgUrl: 'assets/images/my-discussion-2.png',
        header: 'Excepteur sint occaecat cupidatat non proident',
        smallHeader: 'Private discussion',
        subHeader: null,
        description: null,
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: '',
          text: 'Idea',
          class: 'cyan'
        }],
        actions: [{
          icon: 'baseline-person-24px.svg',
          text: '21'
        },
        {
          icon: 'comment.svg',
          text: '102'
        },
        {
          icon: 'baseline-share-24px.svg',
          text: 'share'
        },
        {
          icon: 'bookmark_dark.svg',
          text: 'save',
          type: 1 
        }]
      }
    ]);
  }
}