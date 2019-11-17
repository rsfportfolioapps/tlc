import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelAssignmentComponent } from './components/channel-assignment/channel-assignment.component';
import { ChannelComponent } from './components/channel/channel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { Routes, RouterModule } from '@angular/router';
import { LearningChannelContainerComponent } from './container/learning-channel-container.component';
import { ChannelResourcesComponent } from './components/channel-resources/channel-resources.component';
import { ReviewComponent } from './components/review/review.component';

export const routes: Routes = [
  {
    path: '',
    component: LearningChannelContainerComponent
  }
];


@NgModule({
  declarations: [
    ChannelAssignmentComponent, 
    ChannelComponent, 
    StepperComponent,
    LearningChannelContainerComponent,
    ChannelResourcesComponent,
    ReviewComponent
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
export class LearningChannelModule { }