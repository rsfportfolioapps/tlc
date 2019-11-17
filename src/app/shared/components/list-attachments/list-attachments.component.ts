import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-attachments',
  templateUrl: './list-attachments.component.html',
  styleUrls: ['./list-attachments.component.scss']
})
export class ListAttachmentsComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
