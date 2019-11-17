import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class DiscussionNewContentComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  constructor() { }

  ngOnInit(): void { }
}
