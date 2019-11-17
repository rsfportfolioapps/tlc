import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CardModule } from 'primeng/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KnowledgePointsComponent } from './components/knowledge-points/knowledge-points.component';
import { MyProgressComponent } from './components/my-progress/my-progress.component';
import { RankService } from './services/rank.service';
import { RankReducer } from './store/reducers/rank.reducer';
import { RankEffects } from './store/effects/rank.effect';
import { RankContainerComponent } from './container/rank-container.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RankContainerComponent,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  declarations: [
    RankContainerComponent,
    KnowledgePointsComponent,
    MyProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CardModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('rank', RankReducer),
    EffectsModule.forFeature([RankEffects]),
  ],
  exports: [],
  providers: [RankService],
})

export class RankModule { }
