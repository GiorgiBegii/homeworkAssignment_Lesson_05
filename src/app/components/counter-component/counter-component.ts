// counter.component.ts
import { Component, Self, SkipSelf, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../services/counter-service';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  providers: [CounterService],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.scss',
})
export class CounterComponent {
  // 👇 resolves ONLY from this component's injector
  local = inject(CounterService, { self: true });

  // 👇 skips local injector, resolves from parent/root
  global = inject(CounterService, { skipSelf: true });
}
