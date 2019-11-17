import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-helpful',
  templateUrl: './helpful.component.html',
  styleUrls: ['./helpful.component.scss']
})
export class WashelpfulComponent implements OnInit {
  public assetImgPath: string = environment.assetImgPath;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { environment }

  ngOnInit(): void { }
}
