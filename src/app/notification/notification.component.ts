import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
                <div class="tx"><p>this website use cookies for better experince</p></div>
                <div class="close"><button class="btn" (click)="hideNotification()">| x </button></div>
             </div>`,
  styles: [".alert{display:relative;margin:10px 0px;padding:10px 20px;text-align:center;background-color:#FAD7A0;}",
          "p{font-size: 14px;}",".tx{display:inline-block;padding:0 10px 0 10px;margin-right:25%;}",
          ".close{display:inline-block;margin-right:-20%;}", 
          ".fadeOut{visibility:hidden;opacity:0;transition: visibility 0s 2s, opacity 2s linear;}"
        ]
})
export class NotificationComponent {
  displayNotification: boolean= false;

  hideNotification(){
    this.displayNotification= true;
  }
}
