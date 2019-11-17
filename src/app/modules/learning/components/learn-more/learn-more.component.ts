import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Learning } from '../../models/learning.model';
import { environment } from 'src/environments/environment';
import { LearningState, getLearnMore } from '../../store/reducers/learning.reducer';
import { Store, select } from '@ngrx/store';
import { getLearnMoreSelector } from '../../store/selectors/learning.selector';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss']
})
export class LearnMoreComponent implements OnInit {
  public learnMore$: Observable<Learning[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private store: Store<LearningState>) { 
    this.learnMore$ = this.store.pipe(select(getLearnMoreSelector));
  }

  ngOnInit(): void { }
}
