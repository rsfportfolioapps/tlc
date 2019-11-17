import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardContainerComponent } from './container/board-container.component';
import { BoardComponent } from './components/board/board.component';
import { BoardReducer } from './store/reducers/board.reducer';
import { BoardEffects } from './store/effects/board.effects';
import { BoardService } from './services/board.service';
import { MovePopoverComponent } from './components/move-popover/move-popover.component';
import { DialogModule } from 'primeng/dialog';
import { MoveModalComponent } from './components/move-modal/move-modal.component';
import { NewActivityComponent } from './components/new-activity/new-activity.component';
import { MatCardModule } from '@angular/material/card';
import { AuthGuard } from 'src/app/services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: BoardContainerComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  declarations: [
    BoardContainerComponent,
    BoardComponent,
    MovePopoverComponent,
    MoveModalComponent,
    NewActivityComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FlexLayoutModule,
    ProgressBarModule,
    CardModule,
    DialogModule,
    MatCardModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('board', BoardReducer),
    EffectsModule.forFeature([BoardEffects]),
  ],
  exports: [],
  entryComponents: [MovePopoverComponent, MoveModalComponent, NewActivityComponent, BoardComponent],
  providers: [BoardService],
})
export class BoardModule { }
