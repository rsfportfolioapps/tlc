import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionNewGeneralComponent } from './container/general-container.component';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { GroupTypeComponent } from './components/group-type/group-type.component';

export const routes: Routes = [
  {
    path: '',
    component: DiscussionNewGeneralComponent
  }
];

const materialModules = [
  MatInputModule,
  MatRadioModule
];

@NgModule({
  declarations: [
    DiscussionNewGeneralComponent,
    GeneralInfoComponent,
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
export class DiscussionNewGeneralModule { }
