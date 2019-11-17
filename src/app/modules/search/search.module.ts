import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './container/search-container.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchCategoryComponent } from './component/search-category/search-category.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'primeng/card';

export const routes: Routes = [
  {
    path: '',
    component: SearchContainerComponent,
    canActivate: [AuthGuard]
  }
];

const materialModules = [
  MatCardModule
];

const primeNGModules = [
  CardModule,
];

@NgModule({
  declarations: [SearchContainerComponent, SearchCategoryComponent],
  imports: [
    CommonModule,
    IonicModule,
    FlexLayoutModule,
    SharedModule,
    ...materialModules,
    ...primeNGModules,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class SearchModule { }