import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rank-container',
  templateUrl: './rank-container.component.html',
  styleUrls: ['./rank-container.component.scss']
})
export class RankContainerComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
