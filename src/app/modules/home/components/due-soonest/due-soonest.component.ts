import { Component, OnInit } from '@angular/core';
import { DueSoonest } from '../../models/due-soonest.model';
import { HomeService } from '../../services/home.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { getDueSoonestSelector } from '../../store/selectors/home.selectors';
import { LearningType } from 'src/app/modules/learning/models/learning.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-due-soonest',
  templateUrl: './due-soonest.component.html',
  styleUrls: ['./due-soonest.component.scss']
})
export class DueSoonestComponent implements OnInit {
  public dueSoonest$: Observable<DueSoonest[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private router: Router, private store: Store<HomeService>) { 
    this.dueSoonest$ = this.store.pipe(select(getDueSoonestSelector));
  }

  ngOnInit(): void { }

  public gotoLink(type: LearningType): void {
    switch (type) {
      case 1:
        this.router.navigateByUrl('/learning/course');
        break;
      case 2:
        this.router.navigateByUrl('/learning/channel');
        break;

      default:
        break;
    }
  }
}
