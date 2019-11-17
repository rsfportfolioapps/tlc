import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {
  public thumbnails$: Observable<any[]>;
  public assetSvgPath: string = environment.assetSvgPath;

  @Input()
  public response: Response;

  constructor(private store: Store<any>) {
    this.thumbnails$ = of([
      {
        text: "Don't miss out on Mylo conference...",
        img: 'assets/images/reco-channel-1.png'
      },
      {
        text: 'A quick guide to Mylo',
        img: 'assets/images/due-soonest-3.png'
      },
      {
        text: 'Article',
        img: 'assets/images/common-img.png'
      },
    ]);
  }
  ngOnInit(): void { }
}
