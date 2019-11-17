import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ResponseType, Response } from '../models/ari.model';

@Component({
  selector: 'app-ari',
  templateUrl: './ari-container.component.html',
  styleUrls: ['./ari-container.component.scss'],
  animations: [
    trigger('zoomOutAnimate', [
      state('start', style({
        transform: 'scale(1)',
        position: 'relative',
        top: '0'
      })),
      state('end', style({
        transform: 'scale(0.5)',
        position: 'relative',
        top: '-80px'
      })), 
      transition('end=>start', animate('300ms 0.5s ease-in')),
      transition('start=>end', animate('300ms 0.5s ease-in'))
    ]),
    trigger('fadeOutAnimate', [
      state('start', style({ opacity: 1 })),
      state('end', style({ opacity: 0 })),
      transition('start => end', animate('600ms')),
      transition('end => start', animate('300ms')),
    ]),
    trigger('slideUpAnimate', [
      state('start', style({ opacity: 0, transform: 'translateY(10px)' })),
      state('end', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('start => end', animate('600ms 1s ease-in')),
      transition('end => start', animate('300ms 0.5s ease-in')),
    ])
  ]
})

export class AriContainerComponent implements OnInit {
  public welcomeAri: boolean = false;
  public currentState: string = 'start';
  public responseArr: Response[] = [];
  public isListening: boolean = false;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.welcomeAri = true;

    setTimeout(() => {
      this.changeState();
    }, 2000);
  }

  public responseIsThumbnail(response: Response): boolean {
    return response.type === ResponseType.thumbnail;
  }

  public setResponse(response: Response): void {
    this.responseArr.push(response);
  }

  public changeState(): void {
    this.currentState = this.currentState === 'start' ? 'end' : 'start';
  }

  public goBack(): void {
    if (this.route.url === '/ari')
      this.route.navigateByUrl('dashboard/home');
    else
      this.route.navigateByUrl('dashboard/processes');
  }
}
