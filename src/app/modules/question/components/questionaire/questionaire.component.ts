import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss']
})
export class QuestionaireComponent implements OnInit {
  public questions$: Observable<Question[]> = of([
    {
      text: 'Why is learning about ethics important?',
      answers: [
        {
          text: 'It helps individuals think about things in different ways',
          isCorrect: false
        },
        {
          text: 'It results in better decision-making',
          isCorrect: false
        },
        {
          text: 'It helps individuals think about what to do in their role within the organisation',
          isCorrect: false
        }
        ,
        {
          text: 'All of the above',
          isCorrect: true
        }
      ]
    }
  ]);

  constructor() { }

  ngOnInit(): void { }
}
