import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity.model';
import { Store, select } from '@ngrx/store';
import { ActivityState } from '../store/reducers/activity.reducer';
import { getActivitySelector } from '../store/selectors/activity.selector';
import { MatDialog } from '@angular/material/dialog';
import { ArchiveDialogComponent } from './archive-dialog/archive-dialog.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public activities$: Observable<Activity[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(public dialog: MatDialog, private store: Store<ActivityState>) {
    this.activities$ = this.store.pipe(select(getActivitySelector));
  }
  ngOnInit(): void { }

  public onClick(action: any, act: any): void {
    console.log(action, act);
    this.showArchiveDialog();
  }

  public showArchiveDialog(): void {
    this.dialog.open(ArchiveDialogComponent, {
      data: {}
    });
  }
}
