import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-episode-resources',
  templateUrl: './episode-resources.component.html',
  styleUrls: ['./episode-resources.component.scss']
})
export class EpisodeResourcesComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
