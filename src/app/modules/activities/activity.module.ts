import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityContainerComponent } from './container/activity-container.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityService } from './services/activity.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from './store/effects/activity.effects';
import { ActivityReducer } from './store/reducers/activity.reducer';
import { ActivityComponent } from './components/activity.component';
import { CardModule } from 'primeng/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from 'src/app/services/auth.guard';
import { ArchiveDialogComponent } from './components/archive-dialog/archive-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: ActivityContainerComponent,
    canActivate: [AuthGuard]
  },
];

const materialModules = [
  MatDialogModule
];

@NgModule({
  declarations: [
    ActivityContainerComponent,
    ActivityComponent,
    ArchiveDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CardModule,
    ...materialModules,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('activity', ActivityReducer),
    EffectsModule.forFeature([ActivityEffects]),
  ],
  entryComponents: [ArchiveDialogComponent],
  exports: [],
  providers: [ActivityService],
})

export class ActivityModule { }
