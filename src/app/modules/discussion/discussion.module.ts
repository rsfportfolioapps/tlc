import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDiscussionComponent } from './components/my-discussion/my-discussion.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DiscussionContainerComponent } from './container/discussion-container.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DiscussionReducer } from './store/reducers/discussion.reducer';
import { DiscussionEffects } from './store/effects/discussion.effects';
import { FormsModule } from '@angular/forms';
import { DiscussionService } from './services/discussion.service';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { DiscussionCardComponent } from './components/discussion-card/discussion-card.component';
import { SavedDiscussionComponent } from './components/saved-discussion/saved-discussion.component';
import { DiscussionNewestComponent } from './components/discussion-newest/discussion-newest.component';
import { BlockUIModule } from 'primeng/blockui';

export const routes: Routes = [
  {
    path: '',
    component: DiscussionContainerComponent,
  }
];

const angularMaterialModules = [
  BlockUIModule, CardModule
];

@NgModule({
  declarations: [
    MyDiscussionComponent,
    DiscussionContainerComponent,
    DiscussionCardComponent,
    SavedDiscussionComponent,
    DiscussionNewestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    IonicModule,
    ...angularMaterialModules,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('discussion', DiscussionReducer),
    EffectsModule.forFeature([DiscussionEffects])
  ],
  exports: [],
  providers: [DiscussionService],
})

export class DiscussionModule { }
