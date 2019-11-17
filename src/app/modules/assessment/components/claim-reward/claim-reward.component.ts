import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-claim-reward',
  templateUrl: './claim-reward.component.html',
  styleUrls: ['./claim-reward.component.scss']
})
export class AssessmentClaimRewardComponent implements OnInit {
  public badges = [{
    icon: 'score.svg',
    text: '1',
    class: 'score'
  },
  {
    icon: 'time_icon.svg',
    text: '30m',
    class: 'clock'
  }];
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
