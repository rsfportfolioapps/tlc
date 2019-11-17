import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Learning } from 'src/app/modules/learning/models/learning.model';
import { Store, select } from '@ngrx/store';
import { getCompletedLearningSelector } from 'src/app/store/selectors/app.selectors';
import { AppState } from 'src/app/store/reducers/app.reducers';

@Component({
  selector: 'app-completed-learning',
  templateUrl: './completed-learning.component.html',
  styleUrls: ['./completed-learning.component.scss']
})
export class CompletedLearningComponent implements OnInit {
  public completedLearning$: Observable<Learning[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private appStore: Store<AppState>) {
    this.completedLearning$ = this.appStore.pipe(select(getCompletedLearningSelector));
  }

  ngOnInit(): void { }
}
