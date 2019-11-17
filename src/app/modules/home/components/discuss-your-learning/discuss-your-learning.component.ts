import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DiscussLearnings } from '../../models/discussLearnings.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { HomeService } from '../../services/home.service';
import { getDiscussLearnings } from '../../store/selectors/home.selectors';

@Component({
  selector: 'app-discuss-your-learning',
  templateUrl: './discuss-your-learning.component.html',
  styleUrls: ['./discuss-your-learning.component.scss']
})
export class DiscussYourLearningComponent implements OnInit {
  public dicussLearnings$: Observable<DiscussLearnings[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private store: Store<HomeService>) { 
    this.dicussLearnings$ = this.store.pipe(select(getDiscussLearnings));
  }

  ngOnInit(): void { }
}
