import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Processes } from '../../models/processes.model';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { ProcessesState } from '../../store/reducers/processes.reducer';
import { getProcessesLibrarySelector } from '../../store/selectors/processes.selector';

@Component({
  selector: 'app-processes-library',
  templateUrl: './processes-library.component.html',
  styleUrls: ['./processes-library.component.scss']
})
export class ProcessesLibraryComponent implements OnInit {
  public libraryProcesses$: Observable<Processes[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private store: Store<ProcessesState>) {
    this.libraryProcesses$ = this.store.pipe(select(getProcessesLibrarySelector));
  }

  ngOnInit(): void { }
}
