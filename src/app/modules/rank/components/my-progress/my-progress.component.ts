import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-progress',
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.scss']
})
export class MyProgressComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  public assetImgPath: string = environment.assetImgPath;
  
  public badges = [{
    icon: 'score.svg',
    text: '20/100',
    class: 'score'
  },
  {
    icon: 'mandatory.svg',
    text: '10',
    class: 'mandatory'
  },
  {
    icon: 'time_icon.svg',
    text: '30m',
    class: 'clock'
  }]

  constructor() { }

  ngOnInit(): void { }
}
