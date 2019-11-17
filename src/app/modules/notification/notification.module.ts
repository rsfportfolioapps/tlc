import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNotificationComponent } from './components/my-notification/my-notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'primeng/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NotificationContainerComponent } from './container/notification-container.component';
import { NotificationReducer } from './store/reducers/notification.reducer';
import { NotificationEffects } from './store/effects/notification.effects';
import { NotificationService } from './services/notification.service';
import { NotificationFilterComponent } from './components/notification-filter/notification-filter.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationContainerComponent
  },
];

@NgModule({
  declarations: [
    MyNotificationComponent,
    NotificationContainerComponent,
    NotificationFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CardModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('notification', NotificationReducer),
    EffectsModule.forFeature([NotificationEffects]),
  ],
  exports: [],
  providers: [NotificationService],
})
export class NotificationModule { }