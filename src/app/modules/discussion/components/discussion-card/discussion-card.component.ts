import { Component, OnInit, Input } from '@angular/core';
import { MyDiscussion } from '../../models/discussion.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actions, ActionType } from 'src/app/modules/home/models/actions.model';
import { Store } from '@ngrx/store';
import { DiscussionState } from '../../store/reducers/discussion.reducer';
import { SaveDiscussion } from '../../store/actions/discussion.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discussion-card',
  templateUrl: './discussion-card.component.html',
  styleUrls: ['./discussion-card.component.scss']
})
export class DiscussionCardComponent implements OnInit {
  @Input()
  public discussions: Observable<MyDiscussion[]>;

  @Input()
  public isSaved: boolean = false;

  public assetSvgPath: string = environment.assetSvgPath;
  public actionType = ActionType;
  public newDiscussions: MyDiscussion[] = [];

  constructor(private route: Router, private store: Store<DiscussionState>) { }

  ngOnInit(): void { }

  public gotoDetail(): void {
    this.route.navigateByUrl('discussion/detail');
  }

  public onClick(action: Actions, discussion: MyDiscussion): void {
    switch (action.type) {
      case this.actionType.save:
        this.saveDiscussion(discussion);
        break;

      default:
        break;
    }
  }

  private saveDiscussion(discussion: MyDiscussion): void {
    this.store.dispatch(new SaveDiscussion(discussion));
  }
}
