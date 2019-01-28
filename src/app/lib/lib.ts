import { of, Subscription, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { S1Service } from '../s1.service';

/** */
export class Lib {

  /***/
  id = Math.random();

  /***/
  s1Subscription: Subscription;

  /***/
  constructor(private s1: S1Service) {
  }

  /***/
  init() {
    this.s1Subscription = this.s1.b1
      .pipe(
        switchMap((value) => {
          console.log(`id = ${this.id} val = ${value}`);
          return this.loadResources()
            .pipe(map(() => {
              return value;
            }));
        })
      ).subscribe(
        () => {
        }
      );
  }

  /** */
  loadResources() {
    return forkJoin(of(1), of(2), (val1, val2) => {
      return { val1, val2 };
    })
      .pipe(
        map((val) => {
          return val;
        }),
      );
  }

  /***/
  destroy() {
    this.s1Subscription.unsubscribe();
  }
}
