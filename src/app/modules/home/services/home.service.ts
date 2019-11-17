import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContinueLearning } from '../models/continue-learning.model';
import { RecommendedChannel } from '../models/recommended-channel.model';
import { DiscoverNewTopic } from '../models/discover-new-topic.model';
import { DiscussLearnings } from '../models/discussLearnings.model';

@Injectable()
export class HomeService {
  public getDiscussLearnings(): Observable<DiscussLearnings[]> {
    return of([
      {
        id: 1,
        imgUrl: 'assets/images/reco-channel-1.png',
        header: 'Ethics and good decision making',
        subHeader: null,
        description: 'Duis aute irure dolor in repreh enderit in voluptate te las',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: 'score.svg',
          text: '1',
          class: 'score'
        },
        {
          icon: 'mandatory.svg',
          text: 'Mandatory',
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
      }
    ]);
  }

  public getDiscoverNewTopic(): Observable<DiscoverNewTopic[]> {
    return of([
      {
        id: 1,
        imgUrl: 'assets/images/reco-channel-1.png',
        header: null,
        subHeader: null,
        description: 'Duis aute irure dolor in repreh enderit in voluptate te las',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: null,
          text: 'content related',
          class: 'violet'
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
        id: 2,
        imgUrl: 'assets/images/reco-channel-2.png',
        header: null,
        subHeader: null,
        description: 'Dolor magna eget est lorem ipsum dolor',
        subDescription: null,
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: null,
          text: 'general',
          class: 'green'
        }],
        actions: [{
          icon: 'baseline-person-24px.svg',
          text: '21'
        },
        {
          icon: 'comment.svg',
          text: '102'
        }]
      }
    ]);
  }

  public getRecommendedChannel(): Observable<RecommendedChannel[]> {
    return of([
      {
        id: 1,
        imgUrl: 'assets/images/reco-channel-1.png',
        header: null,
        subHeader: null,
        description: 'Live-edge raw denim activated charcoal, blog pinterest street art hexagon selfies raclette lyft tacos... aesthetic jianbing pickled schlitz. Kinfolk gentrify readymade gastropub, tilde 90',
        subDescription: '8 episodes',
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: 'score.svg',
          text: '8',
          class: 'score'
        }]
      },
      {
        id: 2,
        imgUrl: 'assets/images/reco-channel-2.png',
        header: null,
        subHeader: null,
        description: 'Live-edge raw denim activated charcoal, blog pinterest street art hexagon selfies raclette lyft tacos... aesthetic jianbing pickled schlitz. Kinfolk gentrify readymade gastropub, tilde 90',
        subDescription: '8 episodes',
        dueDate: null,
        longDescription: null,
        badges: [{
          icon: 'score.svg',
          text: '8',
          class: 'score'
        }]
      }
    ]);
  }

  public getContinueLearning(): Observable<ContinueLearning[]> {
    return of([
      {
        id: 1,
        imgUrl: 'assets/images/card-img.png',
        header: 'Ethics & good decision making',
        subHeader: 'Episode 2/2 in ethics',
        subDescription: 'Greyhound divisively hello coldly wonderfully marginally far…',
        dueDate: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudianda numquam deserun quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
        badges: [{
          icon: 'score.svg',
          text: '1',
          class: 'score'
        },
        {
          icon: 'mandatory.svg',
          text: 'Mandatory',
          class: 'mandatory'
        },
        {
          icon: 'time_icon.svg',
          text: '30m',
          class: 'clock'
        }]
      }
    ]);
  }

  public getDueSoonest(): Observable<any> {
    return of([
      {
        id: 1,
        type: null,
        title: 'Due soonest name 1',
        imgUrl: 'assets/images/due-soonest-1.png',
        description: 'Communication Leadership',
        subDescription: '',
        dueDate: null,
        header: '',
        subHeader: '',
        badges: [{
          icon: 'time_icon.svg',
          text: '30m',
          class: 'clock'
        }],
        actions: [{
          icon: 'comment.svg',
          text: '12'
        },
        {
          icon: 'attach_small.svg',
          text: '12'
        },
        {
          icon: 'time_icon.svg',
          text: '30m'
        },
        {
          icon: 'baseline-share-24px.svg',
          text: ''
        }]
      },
      {
        id: 2,
        type: null,
        title: 'Due soonest name 2',
        imgUrl: 'assets/images/due-soonest-2.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisic Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum dolor sit amet, consectetur adipisic',
        subDescription: null,
        dueDate: 'Due today 4:30 PM',
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
        actions: [{
          icon: 'comment.svg',
          text: '12'
        },
        {
          icon: 'attach_small.svg',
          text: '12'
        },
        {
          icon: 'time_icon.svg',
          text: '30m'
        },
        {
          icon: 'baseline-share-24px.svg',
          text: ''
        }]
      },
      {
        id: 2,
        type: 1,
        title: 'Understanding alternatives',
        imgUrl: 'assets/images/due-soonest-3.png',
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
        actions: [{
          icon: 'comment.svg',
          text: '12'
        },
        {
          icon: 'attach_small.svg',
          text: '12'
        },
        {
          icon: 'time_icon.svg',
          text: '30m'
        },
        {
          icon: 'baseline-share-24px.svg',
          text: ''
        }]
      }
    ]);
  }
}
