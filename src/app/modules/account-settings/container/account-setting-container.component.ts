import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-account-setting-container',
  templateUrl: './account-setting-container.component.html',
  styleUrls: ['./account-setting-container.component.scss']
})
export class AccountSettingContainerComponent implements OnInit {
  public assetImgPath: string = environment.assetImgPath;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
