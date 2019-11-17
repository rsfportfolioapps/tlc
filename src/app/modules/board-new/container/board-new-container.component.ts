import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-board-new-container',
  templateUrl: './board-new-container.component.html',
  styleUrls: ['./board-new-container.component.scss']
})
export class BoardNewContainerComponent implements OnInit {
  public assetImgPath: string = environment.assetImgPath;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
