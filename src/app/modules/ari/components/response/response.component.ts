import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../models/ari.model';

@Component({
  selector: 'app-ari-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class AriResponseComponent implements OnInit {
  @Input()
  public response: Response;

  constructor() { }

  ngOnInit(): void { }
}
