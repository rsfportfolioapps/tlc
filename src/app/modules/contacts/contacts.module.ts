import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactContainerComponent } from './container/contact-container.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContactReducer } from './store/reducers/contacts.reducer';
import { ContactsEffects } from './store/effects/contacts.effects';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactSearchComponent } from './components/contact-search/contact-search.component';
import { ContactService } from './services/contacts.service';

export const routes: Routes = [
  {
    path: '',
    component: ContactContainerComponent,
  }
];

const materialModules = [
  MatDialogModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [
    ContactListComponent,
    ContactContainerComponent,
    ContactSearchComponent
  ],
  imports: [ 
    CommonModule,
    ...materialModules,
    FormsModule,
    FlexLayoutModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('contacts', ContactReducer),
    EffectsModule.forFeature([ContactsEffects])
  ],
  exports: [],
  providers: [ContactService],
})
export class ContactsModule {}