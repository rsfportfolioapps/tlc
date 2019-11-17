import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { emailRegex } from 'src/app/shared/utils/constants';
import { AuthService } from '../../services/auth.services';
import { User } from '../../models/user.model';
import { take, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/reducers/auth-reducers';
import { LoginActionSuccess } from '../../store/actions/auth-actions';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export enum LoginScreen {
  email = 1,
  password = 2
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public assetImgPath: string = environment.assetImgPath;
  public loginScreen: LoginScreen;
  public form: FormGroup;
  public loadProfileImage: boolean = false;
  public signInLoading: boolean = false;
  public imgUrl: string;

  constructor(private router: Router, private store: Store<AuthState>, private authService: AuthService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex.email)])],
      password: [''] 
    });
  }

  ngOnInit(): void {
    this.loginScreen = LoginScreen.email;

    setTimeout(() => {
      this.loadProfileImage = !this.loadProfileImage;
    }, 1000);
  }

  public onCheckEmail(): void {
    // this.authService.checkEmail(this.form.value.email).pipe(map(x => x.data), take(1)).subscribe(user => {
    //   this.imgUrl = user.photo;

    //   this.loginScreen = LoginScreen.password;
    // });
    this.loginScreen = LoginScreen.password;
  }

  public onLogin(): void {
    this.signInLoading = true;
    const emailPass: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.authService.login(emailPass).pipe(take(1)).subscribe(user => {
      this.store.dispatch(new LoginActionSuccess({ user }));
      this.router.navigateByUrl('/dashboard/home');
    }, (err) => {
    });
  }

  public gotoForgotPassword(): void {
    alert('Not yet implemented!');
  }
}
