import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Learning, LearningType } from 'src/app/modules/learning/models/learning.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public assignedLearning$: Observable<Learning> = of({
    id: 1,
    type: 1,//category type
    title: 'Gearing and Margin Lending',
    imgUrl: 'assets/images/common-img.png',
    description: 'This channel focuses on understanding alternatives. In particular it covers: BTIM Diversified Strategies Fund...',
    subDescription: '',
    dueDate: null,
    header: '',
    subHeader: '',
    badges: [{
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
      icon: 'mandatory.svg',
      text: 'Mandatory',
      class: 'mandatory'
    }],
    actions: []
  })
  public assignedLearningCategory = LearningType;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() {
    this.assignedLearning$.subscribe(res => console.log(res));
   }

  ngOnInit(): void { }

  public headerClass(type: any): string {
    return this.isType(type) ? `header category-${this.assignedCategory(type).toLowerCase()}`: ''
  }

  public isType(type: LearningType): boolean {
    return type === this.assignedLearningCategory.channel || type === this.assignedLearningCategory.course
  }

  public assignedCategory(type: LearningType): string {
    return LearningType[type].toUpperCase();
  }
}
