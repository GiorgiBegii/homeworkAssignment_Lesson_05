// counter.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {
  private readonly _count$ = new BehaviorSubject<number>(0);

  readonly count$ = this._count$.asObservable();

  get value(): number {
    return this._count$.value;
  }

  increment(): void {
    this._count$.next(this.value + 1);
  }

  decrement(): void {
    this._count$.next(this.value - 1);
  }
}
