import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/shared/components/dropdown-menu/dropdown-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { ExpertDialogComponent } from '../components/expert-dialog/expert-dialog.component';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.scss']
})
export class DiscussionDetailComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  public assetImgPath: string = environment.assetImgPath;

  public badges: [{
    icon: '',
    text: 'General',
    class: 'green'
  }]
  public menus: Menu[] = [
    {
      icon: 'info.svg',
      text: 'Info',
      route: '/discussion/detail/info'
    },
    {
      icon: 'media.svg',
      text: 'Media'
    },
    {
      icon: 'export_chat.svg',
      text: 'Export Chat'
    },
    {
      icon: 'report.svg',
      text: 'Report'
    },
    {
      icon: 'exit_group.svg',
      text: 'Leave'
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  public showExpert(): void {
    this.dialog.open(ExpertDialogComponent, {
      data: {}
    });
  }
}
