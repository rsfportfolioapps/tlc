import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeState } from '../store/reducers/home.reducer';
import { LoadHome } from '../store/actions/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private store: Store<HomeState>) { 
    this.store.dispatch(new LoadHome());
  }
  ngOnInit(): void { }
}

