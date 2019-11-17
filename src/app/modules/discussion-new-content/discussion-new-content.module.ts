import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionNewContentComponent } from './container/content-container.component';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ContentInfoComponent } from './components/content-info/content-info.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { GroupTypeComponent } from './components/group-type/group-type.component';

export const routes: Routes = [
  {
    path: '',
    component: DiscussionNewContentComponent
  }
];

const materialModules = [
  MatInputModule,
  MatRadioModule
];

@NgModule({
  declarations: [
    DiscussionNewContentComponent,
    ContentInfoComponent,
    GroupTypeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FlexLayoutModule,
    CardModule,
    SharedModule,
    ...materialModules,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class DiscussionNewContentModule { }
