import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { MoveModalComponent } from '../move-modal/move-modal.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-move-popover',
  templateUrl: './move-popover.component.html',
  styleUrls: ['./move-popover.component.scss']
})
export class MovePopoverComponent implements OnInit {
  public display: boolean = true;
  public assetSvgPath: string = environment.assetSvgPath;

  constructor(public modalController: ModalController, public popoverCtrl: PopoverController) { }

  ngOnInit(): void {  }

  public async presentModal() {
    this.popoverCtrl.dismiss();

    const modal = await this.modalController.create({
      component: MoveModalComponent
    });
    return await modal.present();
  }
}
