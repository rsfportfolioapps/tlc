import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public display: boolean;
  public assetSvgPath: string = environment.assetSvgPath;
  public badges: any = [{
    icon: 'score.svg',
    text: '23/120',
    class: 'score'
  }]

  constructor(private router: Router, public commonService: CommonService) {
    this.commonService.sidenavToggle$.subscribe(display => this.display = display);
  }

  ngOnInit(): void { }

  public gotoContacts(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/contacts');
    }, 300);
    this.display = false;
  }

  public gotoRank(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/rank');
    }, 300);
    this.display = false;
  }

  public gotoAccountSettings(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/account-settings');
    }, 300);
    this.display = false;
  }
}
