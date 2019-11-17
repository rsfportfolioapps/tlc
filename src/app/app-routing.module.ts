import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { TabsModule } from './modules/tabs/tabs.module';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: './modules/search/search.module#SearchModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'activities/board',
    loadChildren: './modules/board/board.module#BoardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'rank',
    loadChildren: './modules/rank/rank.module#RankModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'discussion/detail',
    loadChildren: './modules/discussion-detail/discussion-detail.module#DiscussionDetailModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'discussion/detail/info',
    loadChildren: './modules/discussion-info/discussion-info.module#DiscussionInfoModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'discussion/new-idea',
    loadChildren: './modules/discussion-new-idea/discussion-new-idea.module#DiscussionNewIdeaModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'contacts',
    loadChildren: './modules/contacts/contacts.module#ContactsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'account-settings',
    loadChildren: './modules/account-settings/account-settings.module#AccountSettingsModule',
  },
  {
    path: 'learning/course',
    loadChildren: './modules/learning-course/learning-course.module#LearningCourseModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'learning/channel',
    loadChildren: './modules/learning-channel/learning-channel.module#LearningChannelModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'discussion/new-general',
    loadChildren: './modules/discussion-new-general/discussion-new-general.module#DiscussionNewGeneralModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'discussion/new-content',
    loadChildren: './modules/discussion-new-content/discussion-new-content.module#DiscussionNewContentModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'assessment',
    loadChildren: './modules/assessment/assessment.module#AssessmentModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'question',
    loadChildren: './modules/question/question.module#QuestionModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'processes/detail/:id',
    loadChildren: './modules/processes-detail/processes-detail.module#ProcessDetailModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'board/new',
    loadChildren: './modules/board-new/board-new.module#BoardNewModule',
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    LoginModule,
    TabsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
