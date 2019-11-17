import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class AriReplyComponent implements OnInit {
  @Input()
  public reply: string;
  
  constructor() { }

  ngOnInit(): void { }
}
