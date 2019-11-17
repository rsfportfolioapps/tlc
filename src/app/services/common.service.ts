import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class CommonService {
  public sidenavToggle$: Observable<boolean>;
  private _sidenavToggle$: ReplaySubject<boolean> = new ReplaySubject();

  constructor() {
    this.sidenavToggle$ = this._sidenavToggle$.asObservable();
  }

  public toggleSidenav(value: boolean) {
    this._sidenavToggle$.next(value);
  }
}