import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { LearningService } from '../../services/learning.service';
import { Observable } from 'rxjs';
import { Learning, LearningType } from '../../models/learning.model';
import { getAssignLearningSelector } from '../../store/selectors/learning.selector';
import { LearningState } from '../../store/reducers/learning.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assigned-learning',
  templateUrl: './assigned-learning.component.html',
  styleUrls: ['./assigned-learning.component.scss']
})
export class AssignedLearningComponent implements OnInit {
  public assignedLearning$: Observable<Learning[]>;
  public assetSvgPath: string = environment.assetSvgPath;
  public assignedLearningCategory = LearningType;

  constructor(private router: Router, private store: Store<LearningState>) {
    this.assignedLearning$ = this.store.pipe(select(getAssignLearningSelector));
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

  public headerClass(type: any): string {
    return this.isType(type) ? `header category-${this.assignedCategory(type).toLowerCase()}` : ''
  }

  public isType(type: LearningType): boolean {
    return type === this.assignedLearningCategory.channel || type === this.assignedLearningCategory.course
  }

  public assignedCategory(type: LearningType): string {
    return LearningType[type].toUpperCase();
  }
}
