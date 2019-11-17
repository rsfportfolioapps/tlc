import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-expert-dialog',
  templateUrl: './expert-dialog.component.html',
  styleUrls: ['./expert-dialog.component.scss']
})
export class ExpertDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ExpertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void { }
}
