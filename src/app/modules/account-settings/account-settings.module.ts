import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountSettingContainerComponent } from './container/account-setting-container.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountSettingContainerComponent
  }
];

const materialModules = [

]

@NgModule({
  declarations: [
    AccountDetailComponent,
    AccountSettingContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CardModule,
    SharedModule,
    ...materialModules,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class AccountSettingsModule { }