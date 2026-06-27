import { Component, afterNextRender, signal } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  protected readonly hidden = signal(false);

  // Keep the splash visible at least this long so it reads as a deliberate
  // intro rather than a flash. Set to 0 to hide as soon as the app is ready.
  private readonly MIN_VISIBLE_MS = 700;

  constructor() {
    // afterNextRender runs only in the browser (never during prerender), so the
    // prerendered HTML keeps the splash visible until the app hydrates.
    afterNextRender(() => {
      setTimeout(() => this.hidden.set(true), this.MIN_VISIBLE_MS);
    });
  }
}
