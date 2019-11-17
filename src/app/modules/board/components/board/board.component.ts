import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../../models/board.model';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { BoardState } from '../../store/reducers/board.reducer';
import { getBoardSelector } from '../../store/selectors/board.selector';
import { PopoverController } from '@ionic/angular';
import { MovePopoverComponent } from '../move-popover/move-popover.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  public myBoardCards$: Observable<Board[]>;
  public assetSvgPath: string = environment.assetSvgPath;
  public sliderConfig: any = {
    grabCursor: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      shadowOffset: 20,
    }
  }

  public boards: Board[] = [
    { name: 'ON HOLD', class: 'black'  },
    { name: 'TO DO', class: 'primary'  },
    { name: 'DOING', class: 'cyan'  },
    { name: 'DONE', class: 'green'  }
  ]

  constructor( public popoverCtrl: PopoverController, private store: Store<BoardState>) {
    this.myBoardCards$ = this.store.pipe(select(getBoardSelector));
  }

  ngOnInit(): void { }

  public async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: MovePopoverComponent,
      event
    });
    await popover.present();
  }

}
