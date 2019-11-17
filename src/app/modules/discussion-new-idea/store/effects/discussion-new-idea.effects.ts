import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { DiscussionNewIdeaService } from '../../services/discussion-new-idea.service';

@Injectable()
export class DiscussionNewIdeaEffects {
  constructor(private actions$: Actions, private discussionNewIdeaService: DiscussionNewIdeaService) { }

}