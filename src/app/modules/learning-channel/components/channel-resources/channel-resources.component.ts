import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-channel-resources',
  templateUrl: './channel-resources.component.html',
  styleUrls: ['./channel-resources.component.scss']
})
export class ChannelResourcesComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  constructor() { }

  ngOnInit(): void { }
}
