import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(0) // 0 est la valeur initiale de notre signal ( 'état' de notre signal )

  increment() {
    this.count.update((prevValue) => prevValue + 1)
  }

  decrement() {
    this.count.update((prevValue) => prevValue - 1)
  }

  reset() {
    this.count.set(0)
  }
}
