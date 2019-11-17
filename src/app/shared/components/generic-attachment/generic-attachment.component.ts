import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-generic-attachment',
  templateUrl: './generic-attachment.component.html',
  styleUrls: ['./generic-attachment.component.scss']
})
export class GenericAttachmentComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  constructor() { }

  ngOnInit(): void { }
}
