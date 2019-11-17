import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ContinueLearning } from 'src/app/modules/home/models/continue-learning.model';
import { AppState } from 'src/app/store/reducers/app.reducers';
import { getContinueLearningSelector } from 'src/app/store/selectors/app.selectors';

@Component({
  selector: 'app-continue-learning',
  templateUrl: './continue-learning.component.html',
  styleUrls: ['./continue-learning.component.scss']
})
export class ContinueLearningComponent implements OnInit {
  public continueLearning$: Observable<ContinueLearning[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private store: Store<AppState>) {
    this.continueLearning$ = this.store.pipe(select(getContinueLearningSelector));
  }

  ngOnInit(): void { }
}
