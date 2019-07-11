import { Component } from '@angular/core';

@Component({
  selector: 'geekwise-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'face-off';

  public getRandom() {

    const randomNumber = Math.random() * 100;
    console.log(randomNumber);
  }
}
