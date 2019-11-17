import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-assessment-container',
  templateUrl: './assessment-container.component.html',
  styleUrls: ['./assessment-container.component.scss']
})
export class AssessmentContainerComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  constructor() { }

  ngOnInit(): void { }
}
