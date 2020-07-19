import { Component, OnInit } from '@angular/core';
import { NgbToastService } from '../provider/ngb-toast.service';
import { NgbToast } from '../interface/ngb-toast';

@Component({
  selector: 'ngb-toast-container',
  templateUrl: './ngb-toast-container.html',
  styleUrls: ['./ngb-toast-container.scss']
})
export class NgbToastContainer implements OnInit {

  toasts: Array<NgbToast> = [];

  constructor(
    private ngbToastService: NgbToastService,
  ) { }

  ngOnInit(): void {
    this.ngbToastService.getAllToasts().subscribe((toasts: Array<NgbToast>) => {
      this.toasts = toasts.slice().reverse();
    });
  }

}
