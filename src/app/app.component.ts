import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
  message: string = '';
  isEnabled: boolean = false;
  send() {
    if (!this.message.trim()) {
      alert("Suggestion value is not defined");
      return;
    }
    this.isEnabled = true;
    this.message = '';
    setTimeout(() => {

      this.isEnabled = false;
      
    }, 4000);
  }
}
