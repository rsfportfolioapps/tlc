import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyDiscussion } from '../../models/discussion.model';
import { Store, select } from '@ngrx/store';
import { DiscussionState } from '../../store/reducers/discussion.reducer';
import { getNewestDiscussionSelector } from '../../store/selectors/discussion.selector';

@Component({
  selector: 'app-discussion-newest',
  templateUrl: './discussion-newest.component.html',
  styleUrls: ['./discussion-newest.component.scss']
})
export class DiscussionNewestComponent implements OnInit {
  public newest$: Observable<MyDiscussion[]>;

  constructor(private store: Store<DiscussionState>) { 
    this.newest$ = this.store.pipe(select(getNewestDiscussionSelector));
  }

  ngOnInit(): void { }
}
