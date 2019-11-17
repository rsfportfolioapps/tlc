import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivityState } from '../store/reducers/activity.reducer';
import { LoadActivity } from '../store/actions/activity.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-container',
  templateUrl: './activity-container.component.html',
  styleUrls: ['./activity-container.component.scss']
})
export class ActivityContainerComponent implements OnInit {
  public selectedSegment: string = 'activity';
  public outBlockMenu: boolean = true;
  public inBlockMenu: boolean = false;
  public showBlockMenu: boolean = false;

  constructor(private router: Router, private store: Store<ActivityState>) {
    this.store.dispatch(new LoadActivity());
  }

  ngOnInit(): void { }

  public toggleOutBlockMenu(inShow: boolean, outShow: boolean): void {
    this.outBlockMenu = outShow;
    this.inBlockMenu = inShow;
    this.showBlockMenu = !this.showBlockMenu;

    if(this.showBlockMenu) {
      this.router.navigateByUrl('board/new');
    }
  }

  public segmentChanged(ev: any) {
  }
}
