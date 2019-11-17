import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  @Input()
  public position: boolean;

  constructor() { }

  ngOnInit(): void { }
}
