import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessesContainerComponent } from './container/processes-container.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProcessesService } from './services/processes.service';
import { StoreModule } from '@ngrx/store';
import { ProcessesReducer } from './store/reducers/processes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProcessesEffects } from './store/effects/processes.effects';
import { CardModule } from 'primeng/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyProcessesComponent } from './components/my-processes/my-processes.component';
import { ProcessesLibraryComponent } from './components/library/processes-library.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProcessesContainerComponent,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  declarations: [
    ProcessesContainerComponent, 
    MyProcessesComponent, 
    ProcessesLibraryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CardModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('processes', ProcessesReducer),
    EffectsModule.forFeature([ProcessesEffects]),
  ],
  exports: [],
  providers: [ProcessesService],
})

export class ProcessesModule { }
