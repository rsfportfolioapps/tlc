import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionNewIdeaComponent } from './container/discussion-new-idea.component';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DiscussionReducer } from '../discussion/store/reducers/discussion.reducer';
import { DiscussionNewIdeaEffects } from './store/effects/discussion-new-idea.effects';
import { DiscussionNewIdeaService } from './services/discussion-new-idea.service';

export const routes: Routes = [
  {
    path: '',
    component: DiscussionNewIdeaComponent
  }
];

@NgModule({
  declarations: [
    DiscussionNewIdeaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FlexLayoutModule,
    CardModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('discussionNewIdea', DiscussionReducer),
    EffectsModule.forFeature([DiscussionNewIdeaEffects]),
  ],
  exports: [],
  providers: [DiscussionNewIdeaService],
})

export class DiscussionNewIdeaModule { }