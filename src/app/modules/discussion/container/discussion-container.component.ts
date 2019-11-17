import { Component, OnInit } from '@angular/core';
import { DiscussionCategory } from '../models/discussion.model';
import { Store } from '@ngrx/store';
import { DiscussionState } from '../store/reducers/discussion.reducer';
import { LoadDiscussion } from '../store/actions/discussion.actions';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-discussion-container',
  templateUrl: './discussion-container.component.html',
  styleUrls: ['./discussion-container.component.scss']
})
export class DiscussionContainerComponent implements OnInit {
  public category = DiscussionCategory[DiscussionCategory.discussions];
  public outBlockMenu: boolean = true;
  public inBlockMenu: boolean = false;
  public showBlockMenu: boolean = false;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private router: Router, private store: Store<DiscussionState>) {
    this.store.dispatch(new LoadDiscussion());
  }

  ngOnInit(): void { }

  public gotoNewIdea(): void {
    this.showBlockMenu = false;
    setTimeout(() => {
      this.router.navigateByUrl('discussion/new-idea');
    }, 100);
  }

  public gotoNewGeneralDiscussion(): void {
    this.showBlockMenu = false;
    setTimeout(() => {
      this.router.navigateByUrl('discussion/new-general');
    }, 100);
  }

  public gotoNewContentDiscussion(): void {
    this.showBlockMenu = false;
    setTimeout(() => {
      this.router.navigateByUrl('discussion/new-content');
    }, 100);
  }

  public toggleOutBlockMenu(inShow: boolean, outShow: boolean): void {
    this.outBlockMenu = outShow;
    this.inBlockMenu = inShow;
    this.showBlockMenu = !this.showBlockMenu;
  }
}
