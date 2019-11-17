import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LearningState } from '../store/reducers/learning.reducer';
import { LoadLearning } from '../store/actions/learning.actions';
import { LearningCategory } from '../models/learning.model';

@Component({
  selector: 'app-learning-container',
  templateUrl: './learning-container.component.html',
  styleUrls: ['./learning-container.component.scss']
})
export class LearningContainerComponent implements OnInit {
  public category = LearningCategory[LearningCategory.myLearning];

  constructor(private store: Store<LearningState>) {
    this.store.dispatch(new LoadLearning());
  }

  ngOnInit(): void { }

  public segmentChanged(ev: any) {
  }
}
