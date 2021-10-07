import { Component, OnInit } from '@angular/core';
import { NgbToastService, NgbToast, NgbToastType } from 'ngb-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private ngbToastService: NgbToastService) {}

  ngOnInit(): void {
    const toast_1: NgbToast = {
      toastType: NgbToastType.Success,
      text: "This is an sample success alert!!",
      dismissible: true,
      onDismiss: () => {
        console.log("Toast dismiss");
      }
    }
    this.ngbToastService.show(toast_1);

    const toast_2: NgbToast = {
      toastType: NgbToastType.Info,
      text: "This is an sample information alert!!",
      dismissible: true,
      onDismiss: () => {
        console.log("Toast dismiss");
      }
    }
    this.ngbToastService.show(toast_2);

    const toast_3: NgbToast = {
      toastType: NgbToastType.Warning,
      text: "This is an sample warning alert!!",
      dismissible: true,
      onDismiss: () => {
        console.log("Toast dismiss");
      }
    }
    this.ngbToastService.show(toast_3);

    const toast_4: NgbToast = {
      toastType: NgbToastType.Danger,
      text: "This is an sample danger alert!!",
      dismissible: true,
      onDismiss: () => {
        console.log("Toast dismiss");
      }
    }
    this.ngbToastService.show(toast_4);

    const toast_5: NgbToast = {
      toastType: NgbToastType.Primary,
      text: "This is an sample primary alert!!",
      dismissible: true,
      onDismiss: () => {
        console.log("Toast dismiss");
      }
    }
    this.ngbToastService.show(toast_5);

    const toast_6: NgbToast = {
      toastType: NgbToastType.Secondary,
      text: "This is an sample secondary alert!!",
      dismissible: true,
      onDismiss: () => {
        console.log("Toast dismiss");
      }
    }
    this.ngbToastService.show(toast_6);

    const toast_7: NgbToast = {
      toastType: NgbToastType.Light,
      text: "This is an sample light alert!!",
      dismissible: true,
      onDismiss: () => {
        console.log("Toast dismiss");
      }
    }
    this.ngbToastService.show(toast_7);

    const toast_8: NgbToast = {
      toastType: NgbToastType.Dark,
      text: "This is an sample dark alert!!",
      dismissible: true,
      onDismiss: () => {
        console.log("Toast dismiss");
      }
    }
    this.ngbToastService.show(toast_8);
  }
}
