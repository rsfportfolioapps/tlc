import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AriContainerComponent } from './container/ari-container.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { AriReplyComponent } from './components/reply/reply.component';
import { AriResponseComponent } from './components/response/response.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WashelpfulComponent } from './components/helpful/helpful.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'primeng/card';
import { ListeningComponent } from './components/listening/listening.component';

export const routes: Routes = [
  {
    path: 'ari', component: AriContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ari/complete', component: AriContainerComponent,
    canActivate: [AuthGuard]
  }
];

const materialModules = [
  MatIconModule,
  MatCardModule
];

const primeNGModules = [
  CardModule,
];

@NgModule({
  declarations: [
    AriContainerComponent,
    AriReplyComponent,
    AriResponseComponent,
    WelcomeComponent,
    WashelpfulComponent,
    ThumbnailsComponent,
    ListeningComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FlexLayoutModule,
    ...materialModules,
    ...primeNGModules,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class AriModule { }

