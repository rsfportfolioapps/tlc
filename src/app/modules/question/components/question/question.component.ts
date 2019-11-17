import { Component, OnInit, Input } from '@angular/core';
import { Option, Question, Answer } from '../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input()
  public question: Question;

  constructor() { }

  ngOnInit(): void {
  }
}
