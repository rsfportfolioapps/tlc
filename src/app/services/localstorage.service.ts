import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  private get(str: string): any {
    return JSON.parse(localStorage.getItem(str)) ? JSON.parse(localStorage.getItem(str)) : null;
  }

  public getActiveTab(): string {
    return this.get('tab');
  }

  public getUser(): string {
    return this.get('user');
  }

  public getUserToken(): string {
    return this.get('user').token;
  }
}
