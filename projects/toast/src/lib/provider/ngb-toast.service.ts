import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgbToast } from '../interface/ngb-toast';

@Injectable()
export class NgbToastService {
  private toastArray: Array<NgbToast> = [];
  private toastSubject: BehaviorSubject<Array<NgbToast>> = new BehaviorSubject<Array<NgbToast>>([]);

  public getAllToasts(): Observable<Array<NgbToast>> {
    return this.toastSubject.asObservable();
  }

  public show(toast: NgbToast): void {
    this.toastArray.push(toast);
    this.toastSubject.next(this.toastArray);
  }

  public remove(toast: NgbToast): void {
    this.toastArray.splice(this.toastArray.findIndex((f) => f == toast), 1);
    this.toastSubject.next(this.toastArray);
  }
}
