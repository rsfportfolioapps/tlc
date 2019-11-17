import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-move-modal',
  templateUrl: './move-modal.component.html',
  styleUrls: ['./move-modal.component.scss']
})
export class MoveModalComponent implements OnInit {
  constructor(public modalController: ModalController, private route: Router) { }

  ngOnInit(): void { }

  public onClose(): void {
    this.modalController.dismiss();
    
    this.route.navigateByUrl('/activities/board');
  }
}
