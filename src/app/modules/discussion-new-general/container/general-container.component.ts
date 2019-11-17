import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-general-container',
  templateUrl: './general-container.component.html',
  styleUrls: ['./general-container.component.scss']
})
export class DiscussionNewGeneralComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  constructor() { }

  ngOnInit(): void { }
}
