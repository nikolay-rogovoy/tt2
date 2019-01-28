import { Component, OnDestroy, OnInit } from '@angular/core';
import { Lib } from '../lib/lib';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit, OnDestroy {

  /** */
  lib: Lib;

  /** */
  constructor(private s1: S1Service) {
    this.lib = new Lib(this.s1);
  }

  /** */
  ngOnInit() {
    this.lib.init();
  }

  /** */
  ngOnDestroy() {
    this.lib.destroy();
  }

}
