import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BoardNewContainerComponent } from './container/board-new-container.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardNewDetailComponent } from './components/board-new-detail.component';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
  MatInputModule
]

export const routes: Routes = [
  {
    path: '',
    component: BoardNewContainerComponent
  }
];


@NgModule({
  declarations: [
    BoardNewContainerComponent,
    BoardNewDetailComponent
  ],
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
  providers: [],
})
export class BoardNewModule { } 