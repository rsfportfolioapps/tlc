import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {
  public assetImgPath: string = environment.assetImgPath;
  public assetSvgPath: string = environment.assetSvgPath;
  
  public showFilter: boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
