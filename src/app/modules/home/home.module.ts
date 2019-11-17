import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home.component';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeNotificationComponent } from './components/home-notification/home-notification.component';
import { HomeRankComponent } from './components/home-rank/home-rank.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { HomeService } from './services/home.service';
import { CardModule } from 'primeng/card';
import { DueSoonestComponent } from './components/due-soonest/due-soonest.component';
import { RecommendedChannelComponent } from './components/recommended-channels/recommended-channel.component';
import { DiscussYourLearningComponent } from './components/discuss-your-learning/discuss-your-learning.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/effects/home.effects';
import { HomeReducer } from './store/reducers/home.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeNotificationComponent,
    HomeRankComponent,
    DueSoonestComponent,
    RecommendedChannelComponent,
    DiscussYourLearningComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FlexLayoutModule,
    ProgressBarModule,
    CardModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('home', HomeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
  exports: [],
  providers: [HomeService],
})
export class HomeModule { }
