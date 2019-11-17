import { Component, OnInit } from '@angular/core';
import { ProcessesCategory } from '../models/processes.model';
import { Store } from '@ngrx/store';
import { ProcessesState } from '../store/reducers/processes.reducer';
import { LoadProcesses } from '../store/actions/processes.action';

@Component({
  selector: 'app-processes-container',
  templateUrl: './processes-container.component.html',
  styleUrls: ['./processes-container.component.scss']
})
export class ProcessesContainerComponent implements OnInit {
  public category = ProcessesCategory[ProcessesCategory.myprocesses];

  constructor(private store: Store<ProcessesState>) {
    this.store.dispatch(new LoadProcesses());
  }

  ngOnInit(): void { }

  public segmentChanged(ev: any) {
  }
}
