import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private loadingController: LoadingController, ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.presentLoading();

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loadingController.dismiss();
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.loadingController.dismiss();

        // let data = {};
        // data = {
        //   reason: error && error.error.reason ? error.error.reason : '',
        //   status: error.status
        // };
        return throwError(error);
      }));
  }

  async presentLoading() {
    const loading = await this.loadingController.create(null);
    await loading.present();
  }
}
