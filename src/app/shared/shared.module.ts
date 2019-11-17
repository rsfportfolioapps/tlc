import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverNewTopicComponent } from './components/discover-new-topic/discover-new-topic.component';
import { CardModule } from 'primeng/card';
import { HomeService } from '../modules/home/services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContinueLearningComponent } from './components/continue-learning/continue-learning.component';
import { CompletedLearningComponent } from './components/completed-learning/completed-learning.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LearningService } from '../modules/learning/services/learning.service';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressBarModule } from 'primeng/progressbar';
import { MatListModule } from '@angular/material/list';
import { GenericAttachmentComponent } from './components/generic-attachment/generic-attachment.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { TipsComponent } from './components/tips/tips.component';
import { ListAttachmentsComponent } from './components/list-attachments/list-attachments.component';
import { GenericCommentsComponent } from './components/generic-comments/generic-comments.component';

export const routes: Routes = [{
  path: 'completed-learning', component: CompletedLearningComponent
}];

const materialModules = [
  MatIconModule,
  MatMenuModule,
  ProgressBarModule,
  MatListModule
];

const primeNGModules = [
  SidebarModule,
  CardModule,
];

@NgModule({
  declarations: [
    DiscoverNewTopicComponent,
    ContinueLearningComponent,
    CompletedLearningComponent,
    DropdownMenuComponent,
    SidenavComponent,
    GenericAttachmentComponent,
    ParticipantsComponent,
    TipsComponent,
    ListAttachmentsComponent,
    GenericCommentsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FlexLayoutModule,
    ...materialModules,
    ...primeNGModules,
    RouterModule.forChild(routes)
  ],
  exports: [
    DiscoverNewTopicComponent,
    ContinueLearningComponent,
    CompletedLearningComponent,
    DropdownMenuComponent,
    SidenavComponent,
    GenericAttachmentComponent,
    ParticipantsComponent,
    TipsComponent,
    ListAttachmentsComponent,
    GenericCommentsComponent
  ],
  providers: [HomeService, LearningService],
})
export class SharedModule { }
