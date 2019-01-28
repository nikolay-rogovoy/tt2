import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  b1 = new BehaviorSubject('init val');

  constructor() { }
}
