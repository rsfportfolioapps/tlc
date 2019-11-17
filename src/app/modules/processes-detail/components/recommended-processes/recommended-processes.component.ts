import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { RecommendedProcess } from '../../models/processes-detail.model';
import { ProcessesDetailState } from '../../store/reducers/processes-detail.reducer';
import { getRecommendedProcess } from '../../store/selectors/processes.selector';

@Component({
  selector: 'app-recommended-processes',
  templateUrl: './recommended-processes.component.html',
  styleUrls: ['./recommended-processes.component.scss']
})
export class RecommendedProcessComponent implements OnInit {
  public recommendedProcess$: Observable<RecommendedProcess[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private store: Store<ProcessesDetailState>) {
    this.recommendedProcess$ = this.store.pipe(select(getRecommendedProcess));
  }
  ngOnInit(): void { }
}
