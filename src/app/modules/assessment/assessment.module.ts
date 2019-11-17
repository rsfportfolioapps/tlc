import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AssessmentReducer } from './store/reducers/assessment.reducer';
import { AssessmentEffects } from './store/effects/assessment.effect';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentContainerComponent } from './container/assessment-container.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssessmentInfoComponent } from './components/assessment-info/assessment-info.component';
import { AssessmentAnswerComponent } from './components/answer/answer.component';
import { AssessmentClaimRewardComponent } from './components/claim-reward/claim-reward.component';
import { AssessmentDetailComponent } from './components/detail/detail.component';
import { AssessmentProgressComponent } from './components/progress/progress.component';
import { AssessmentService } from './services/assessment.service';

export const routes: Routes = [
  {
    path: '',
    component: AssessmentContainerComponent,
    children: [
      {
        path: '',
        component: AssessmentInfoComponent
      }
    ]
  }
];

const materialModules = [];

@NgModule({
  declarations: [
    AssessmentContainerComponent,
    AssessmentInfoComponent,
    AssessmentAnswerComponent,
    AssessmentClaimRewardComponent,
    AssessmentDetailComponent,
    AssessmentProgressComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    IonicModule,
    CardModule,
    SharedModule,
    ...materialModules,
    RouterModule.forChild(routes),
    StoreModule.forFeature('assessment', AssessmentReducer),
    EffectsModule.forFeature([AssessmentEffects])
   ],
  exports: [],
  providers: [AssessmentService],
})
export class AssessmentModule {}