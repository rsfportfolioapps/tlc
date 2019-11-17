import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KnowledgePoints } from '../../models/rank.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-knowledge-points',
  templateUrl: './knowledge-points.component.html',
  styleUrls: ['./knowledge-points.component.scss']
})
export class KnowledgePointsComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  public knowledgePoints$: Observable<KnowledgePoints[]> = of([
    {
      id: 1,
      icon: '',
      title: 'Subway tile slow arb meditation certificate',
      date: ''
    },
    {
      id: 2,
      icon: '',
      title: 'Chia bitters tumblr scenester next level',
      date: ''
    },
    {
      id: 3,
      icon: '',
      title: 'google search',
      date: ''
    }
  ]);

  constructor() { }

  ngOnInit(): void { }
}
