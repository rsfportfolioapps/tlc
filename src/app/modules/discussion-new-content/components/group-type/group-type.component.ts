import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-type',
  templateUrl: './group-type.component.html',
  styleUrls: ['./group-type.component.scss']
})
export class GroupTypeComponent implements OnInit {
  public types: Array<{ value: string, label: string, description: string }> = [
    {
      label: 'Public',
      value: '1',
      description: 'Anyone can join and collaborate'
    },
    {
      label: 'Invitation',
      value: '2',
      description: 'Other users can request to join the collaboration'
    },
    {
      label: 'Private',
      value: '3',
      description: 'This group is hidden from the public view and requires an invitation to join'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.types);
   }
}
