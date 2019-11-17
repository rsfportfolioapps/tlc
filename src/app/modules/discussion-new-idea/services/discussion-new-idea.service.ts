import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewIdea } from '../models/discussion-new-idea.model';

@Injectable()
export class DiscussionNewIdeaService {
  public getNewIdeas(): Observable<NewIdea[]> {
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
}
