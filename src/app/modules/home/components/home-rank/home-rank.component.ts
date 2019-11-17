import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-rank',
  templateUrl: './home-rank.component.html',
  styleUrls: ['./home-rank.component.scss']
})
export class HomeRankComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
