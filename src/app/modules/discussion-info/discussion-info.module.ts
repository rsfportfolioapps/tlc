import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionInfoComponent } from './container/discussion-info.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { LeaveDialogComponent } from './components/leave-dialog/leave-dialog.component';

const materialModules = [
  MatDialogModule,
  MatFormFieldModule
]

export const routes: Routes = [
  {
    path: '',
    component: DiscussionInfoComponent
  }
];

@NgModule({
  declarations: [
    DiscussionInfoComponent,
    MainInfoComponent,
    AttachmentsComponent,
    LeaveDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    IonicModule,
    CardModule,
    SharedModule,
    ...materialModules,
    RouterModule.forChild(routes)
  ],
  exports: [],
  entryComponents: [LeaveDialogComponent],
  providers: [],
})
export class DiscussionInfoModule { }