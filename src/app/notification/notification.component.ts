import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="!displayNotifications">
              This website is using cookies to provide better user experience.
              <div class="close"> <button class="btn" (click)="closeNotifications()">X</button></div>
            </div>`,
  styles: [
    ".notifi-div{margin: 10px 0px; padding: 10px 20px; background-color:grey}",
    "p{font-size: 12px;}",
    ".close{float: right; margin-top: -5px;}"
  ]
})
export class NotificationComponent {
  displayNotifications: boolean = true;

  closeNotifications() {
    this.displayNotifications = false;
  }
}
