import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-assignment',
  templateUrl: './course-assignment.component.html',
  styleUrls: ['./course-assignment.component.scss']
})
export class CourseAssignmentComponent implements OnInit {
  public badges = [{
    icon: 'check.svg',
    text: '11/27',
    class: 'l-green'
  },
  {
    icon: 'score.svg',
    text: '20/100',
    class: 'score'
  },
  {
    icon: 'certificate_small.svg',
    text: 'Certificate',
    class: 'certificate'
  }];
  public assetSvgPath: string = environment.assetSvgPath;
  public assetImgPath: string = environment.assetImgPath;
  
  constructor() { }

  ngOnInit(): void { }
}
