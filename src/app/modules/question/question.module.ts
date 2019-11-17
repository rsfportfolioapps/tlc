import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { QuestionContainerComponent } from './container/question-container.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'primeng/components/common/shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { QuestionReducer } from './store/reducers/question.reducer';
import { QuestionEffects } from './store/effects/question.effect';
import { QuestionService } from './services/question.service';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionaireComponent } from './components/questionaire/questionaire.component';


export const routes: Routes = [
  {
    path: '',
    component: QuestionContainerComponent,
    children: [
      {
        path: '',
        component: QuestionaireComponent
      }
    ]
  }
];

const materialModules = [];

@NgModule({
  declarations: [
    QuestionContainerComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionaireComponent
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
    StoreModule.forFeature('question', QuestionReducer),
    EffectsModule.forFeature([QuestionEffects])
  ],
  exports: [],
  providers: [QuestionService],
})
export class QuestionModule { }