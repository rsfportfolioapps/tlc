import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Menu {
  icon?: string;
  text?: string;
  route?: string;
}

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})

export class DropdownMenuComponent implements OnInit {
  @Input()
  public menus: Menu[];

  public assetSvgPath: string = environment.assetSvgPath;

  constructor() {
  }

  ngOnInit(): void { }
}
