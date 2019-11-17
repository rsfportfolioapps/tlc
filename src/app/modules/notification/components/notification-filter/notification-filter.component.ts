import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-filter',
  templateUrl: './notification-filter.component.html',
  styleUrls: ['./notification-filter.component.scss']
})
export class NotificationFilterComponent implements OnInit {
  public selectedFilter: number;
  public filters: any[] = [
    {
      value: 1,
      text: 'Whats new?'
    },
    {
      value: 2,
      text: 'I need help'
    },
    {
      value: 3,
      text: 'I have a question'
    },
    {
      value: 4,
      text: 'Whats new?'
    },
    {
      value: 5,
      text: 'I need help'
    }, {
      value: 6,
      text: 'I have a question'
    }
  ]

  constructor() { }

  ngOnInit(): void { }
}