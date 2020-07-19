import { Component, Input, OnInit } from '@angular/core';
import { NgbToast } from '../interface/ngb-toast';
import { NgbToastService } from '../provider/ngb-toast.service';

@Component({
  selector: 'ngb-toast-component',
  templateUrl: './ngb-toast-component.html',
  styleUrls: ['./ngb-toast-component.scss']
})
export class NgbToastComponent implements OnInit {

  @Input()
  toast: NgbToast;

  isHidden: boolean = false;

  constructor(private ngbToastService: NgbToastService) {
  }

  ngOnInit(): void {
    let time: number;
    if (this.toast.timeInSeconds) {
      time = this.toast.timeInSeconds * 1000;
    } else if (!this.toast.dismissible) {
      time = 3000;
    }
    if (time) {
      setTimeout(() => {
        this.isHidden = true;
        this.toast.onDismiss();
        setTimeout(() => { this.ngbToastService.remove(this.toast); }, 500);
      }, time);
    }
  }

  dismiss(): void {
    this.isHidden = true;
    this.toast.onDismiss();
    setTimeout(() => { this.ngbToastService.remove(this.toast); }, 500);
  }
}
