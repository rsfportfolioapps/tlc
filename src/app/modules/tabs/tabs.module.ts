import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AriModule } from '../ari/ari.module';
import { AuthGuard } from 'src/app/services/auth.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonService } from 'src/app/services/common.service';

const routes: Routes = [
  {
    path: 'dashboard',
    component: TabsComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'processes',
        loadChildren: '../processes/processes.module#ProcessesModule'
      },
      {
        path: 'discussion',
        loadChildren: '../discussion/discussion.module#DiscussionModule'
      },
      {
        path: 'learning',
        loadChildren: '../learning/learning.module#LearningModule'
      },
      {
        path: 'activities',
        loadChildren: '../activities/activity.module#ActivityModule'
      },
      {
        path: 'notification',
        loadChildren: '../notification/notification.module#NotificationModule'
      }
    ]
  }
];

@NgModule({
  declarations: [TabsComponent, ToolbarComponent],
  imports: [
    CommonModule,
    IonicModule,
    FlexLayoutModule,
    AriModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
  providers: [AuthGuard, CommonService],
})

export class TabsModule {}
