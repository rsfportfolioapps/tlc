import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { DiscoverNewTopic } from 'src/app/modules/home/models/discover-new-topic.model';
import { AppState, getDiscoverNewTopic } from 'src/app/store/reducers/app.reducers';

@Component({
  selector: 'app-discover-new-topic',
  templateUrl: './discover-new-topic.component.html',
  styleUrls: ['./discover-new-topic.component.scss']
})
export class DiscoverNewTopicComponent implements OnInit {
  public discoverNewTopic$: Observable<DiscoverNewTopic[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private store: Store<AppState>) {
    this.discoverNewTopic$ = this.store.pipe(select(getDiscoverNewTopic));
  }
  ngOnInit(): void { }
}
