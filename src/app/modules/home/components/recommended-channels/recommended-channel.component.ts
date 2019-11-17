import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendedChannel } from '../../models/recommended-channel.model';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { getRecommendedChannel } from '../../store/selectors/home.selectors';
import { HomeState } from '../../store/reducers/home.reducer';

@Component({
  selector: 'app-recommended-channel',
  templateUrl: './recommended-channel.component.html',
  styleUrls: ['./recommended-channel.component.scss']
})
export class RecommendedChannelComponent implements OnInit {
  public recommendedChannel$: Observable<RecommendedChannel[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private store: Store<HomeState>) { 
    this.recommendedChannel$ = this.store.pipe(select(getRecommendedChannel));
  }

  ngOnInit(): void { }
}
