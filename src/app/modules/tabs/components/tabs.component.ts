import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { Router } from '@angular/router';
import { Tabs } from '../models/tab.model';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public tabs: any = Tabs;
  public display: boolean = false;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private commonService: CommonService, private route: Router, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    if (!this.getActiveTab) {
      this.selectTab(1);
      this.route.navigateByUrl('dashboard/home');
    }
  }

  public selectTab(index: number): void {
    localStorage.setItem('tab', JSON.stringify(index));
  }

  public get getActiveTab(): number {
    return +this.localStorageService.getActiveTab();
  }
}
