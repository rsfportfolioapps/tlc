import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardState } from '../store/reducers/board.reducer';
import { LoadBoard } from '../store/actions/board.action';
import { PopoverController, ModalController } from '@ionic/angular';
import { MovePopoverComponent } from '../components/move-popover/move-popover.component';
import { NewActivityComponent } from '../components/new-activity/new-activity.component';
import { Menu } from 'src/app/shared/components/dropdown-menu/dropdown-menu.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})

export class BoardContainerComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  public menus: Menu[] = [
    {
      icon: 'share.svg',
      text: 'Share',
      route: '/'
    },
    {
      icon: 'Edit.svg',
      text: 'Edit',
      route: '/'
    },
    {
      icon: 'export_chat.svg',
      text: 'Move',
      route: '/'
    },
    {
      icon: 'archive.svg',
      text: 'Archive',
      route: '/'
    }
  ];

  constructor(public modalController: ModalController, public popoverCtrl: PopoverController, private store: Store<BoardState>) {
    this.store.dispatch(new LoadBoard()); 
  }

  ngOnInit(): void { }

  public async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: MovePopoverComponent,
      event
    });
    await popover.present();
  }

  public async presentNewActivity(event: Event) {
    const popover = await this.modalController.create({
      component: NewActivityComponent
    });
    await popover.present();
  }
}
