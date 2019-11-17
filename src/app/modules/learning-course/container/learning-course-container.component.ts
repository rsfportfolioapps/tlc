import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-learning-course-container',
  templateUrl: './learning-course-container.component.html',
  styleUrls: ['./learning-course-container.component.scss']
})
export class LearningCourseContainerComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
