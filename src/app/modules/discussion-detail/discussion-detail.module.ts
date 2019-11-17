import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionDetailComponent } from './container/discussion-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ExpertDialogComponent } from './components/expert-dialog/expert-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialModules = [
  MatDialogModule,
  MatFormFieldModule
]

export const routes: Routes = [
  {
    path: '',
    component: DiscussionDetailComponent
  }
];

@NgModule({
  declarations: [DiscussionDetailComponent, ExpertDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    IonicModule,
    CardModule,
    SharedModule,
    ...materialModules,
    RouterModule.forChild(routes),
  ],
  exports: [],
  entryComponents: [ExpertDialogComponent],
  providers: [],
})
export class DiscussionDetailModule { }