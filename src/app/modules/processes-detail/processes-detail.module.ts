import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProcessesDetailContainerComponent } from './container/processes-detail-container.component';
import { ProcessDetailComponent } from './components/detail/detail.component';
import { ProcessDetailReducer } from './store/reducers/processes-detail.reducer';
import { ProcessDetailEffects } from './store/effects/processes-detail.effects';
import { SummaryComponent } from './components/summary/summary.component';
import { RecommendedProcessComponent } from './components/recommended-processes/recommended-processes.component';
import { ProcessesDetailService } from './services/process-detail.service';

export const routes: Routes = [
  {
    path: '',
    component: ProcessesDetailContainerComponent
  }
];

@NgModule({
  declarations: [
    ProcessesDetailContainerComponent,
    ProcessDetailComponent,
    SummaryComponent,
    RecommendedProcessComponent
  ],
  imports: [ 
    CommonModule,
    IonicModule,
    FlexLayoutModule,
    CardModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('processesDetail', ProcessDetailReducer),
    EffectsModule.forFeature([ProcessDetailEffects]),
   ],
  exports: [],
  providers: [
    ProcessesDetailService
  ],
})
export class ProcessDetailModule {}