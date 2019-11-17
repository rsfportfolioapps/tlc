import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MyDiscussion } from '../../models/discussion.model';
import { Store, select } from '@ngrx/store';
import { DiscussionState } from '../../store/reducers/discussion.reducer';
import { getSavedDiscussionSelector } from '../../store/selectors/discussion.selector';

@Component({
  selector: 'app-saved-discussion',
  templateUrl: './saved-discussion.component.html',
  styleUrls: ['./saved-discussion.component.scss']
})
export class SavedDiscussionComponent implements OnInit {
  public savedDiscussions$: Observable<MyDiscussion[]>;

  @Input()
  public isSaved: boolean = false;

  constructor(private store: Store<DiscussionState>) { 
    this.savedDiscussions$ = this.store.pipe(select(getSavedDiscussionSelector));
  }

  ngOnInit(): void { }
}
