import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phone: [''],
      day: [''],
      month: [''],
      year: [''],
    });
  }

  ngOnInit(): void { }
}
