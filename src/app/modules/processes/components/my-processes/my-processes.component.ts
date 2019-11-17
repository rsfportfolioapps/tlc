import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { Processes } from '../../models/processes.model';
import { ProcessesState } from '../../store/reducers/processes.reducer';
import { getProcessesSelector } from '../../store/selectors/processes.selector';

@Component({
  selector: 'app-my-processes',
  templateUrl: './my-processes.component.html',
  styleUrls: ['./my-processes.component.scss']
})
export class MyProcessesComponent implements OnInit {
  public myprocesses$: Observable<Processes[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(private store: Store<ProcessesState>) {
    this.myprocesses$ = this.store.pipe(select(getProcessesSelector));
  }
  
  ngOnInit(): void { }
}
