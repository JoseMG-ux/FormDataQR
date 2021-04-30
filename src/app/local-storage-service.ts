import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  constructor() { }
  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

}
