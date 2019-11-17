import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-generic-comments',
  templateUrl: './generic-comments.component.html',
  styleUrls: ['./generic-comments.component.scss']
})
export class GenericCommentsComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  public assetImgPath: string = environment.assetImgPath;
  
  constructor() { }

  ngOnInit(): void { }
}
