import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../models/question.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  @Input()
  public answer: Answer;

  constructor() { }

  ngOnInit(): void {
    console.log('answers', this.answer);
  }
}
