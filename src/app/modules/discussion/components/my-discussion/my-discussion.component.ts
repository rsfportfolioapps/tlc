import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyDiscussion } from '../../models/discussion.model';
import { Store, select } from '@ngrx/store';
import { DiscussionState } from '../../store/reducers/discussion.reducer';
import { getMyDiscussionSelector } from '../../store/selectors/discussion.selector';

@Component({
  selector: 'app-my-discussion',
  templateUrl: './my-discussion.component.html',
  styleUrls: ['./my-discussion.component.scss']
})
export class MyDiscussionComponent implements OnInit {
  public myDiscussions$: Observable<MyDiscussion[]>;

  constructor(private store: Store<DiscussionState>) { 
    this.myDiscussions$ = this.store.pipe(select(getMyDiscussionSelector));
  }

  ngOnInit(): void { }
}
