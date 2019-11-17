import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseAssignmentComponent } from './components/course-assignment/course-assignment.component';
import { CourseComponent } from './components/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { Routes, RouterModule } from '@angular/router';
import { LearningCourseContainerComponent } from './container/learning-course-container.component';

export const routes: Routes = [
  {
    path: '',
    component: LearningCourseContainerComponent
  }
];


@NgModule({
  declarations: [
    CourseAssignmentComponent, 
    CourseComponent, 
    StepperComponent,
    LearningCourseContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FlexLayoutModule,
    CardModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class LearningCourseModule { }