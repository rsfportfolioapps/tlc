import { Injectable } from '@angular/core';
import { Observable, of, isObservable, scheduled } from 'rxjs';
import { RecommendedProcess } from '../models/processes-detail.model';

@Injectable()
export class ProcessesDetailService {
  public getRecommendedProcess(): Observable<RecommendedProcess[]> {
    return of([
      {
        id: 1,
        header: 'Lipsum dolor sit amet',
        description: 'Live-edge raw denim activated charcoal, blog pinterest street art hexagon selfies raclette lyft tacos... aesthetic jianbing pickled schlitz. Kinfolk gentrify readymade gastropub, tilde 90',
      },
      {
        id: 2,
        header: 'Contrary to popular belief',
        subHeader: null,
        description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      },
      {
        id: 3,
        header: 'There are many variations of passages',
        subHeader: null,
        description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text'
      }
    ]);
  }


}
