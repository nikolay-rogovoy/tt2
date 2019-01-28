import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tt2';

  /** */
  constructor(private s1: S1Service) {
  }

  /** */
  s1Test() {
    this.s1.b1.next(Math.random().toString());
  }
}
