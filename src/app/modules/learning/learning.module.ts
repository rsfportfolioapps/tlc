import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningContainerComponent } from './container/learning-container.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssignedLearningComponent } from './components/assigned-learning/assigned-learning.component';
import { LearningService } from './services/learning.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LearningEffects } from './store/effects/learning.effects';
import { LearningReducer } from './store/reducers/learning.reducer';
import { CardModule } from 'primeng/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { EpisodeResourcesComponent } from './components/episode-resources/episode-resources.component';

const routes: Routes = [
  {
    path: '',
    component: LearningContainerComponent,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  declarations: [
    LearningContainerComponent, 
    AssignedLearningComponent,
    LearnMoreComponent,
    EpisodeResourcesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FlexLayoutModule,
    CardModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('learning', LearningReducer),
    EffectsModule.forFeature([LearningEffects])
  ],
  exports: [],
  providers: [LearningService],
})

export class LearningModule { }
