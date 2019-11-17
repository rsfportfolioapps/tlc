import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-learning-channel-container',
  templateUrl: './learning-channel-container.component.html',
  styleUrls: ['./learning-channel-container.component.scss']
})
export class LearningChannelContainerComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
