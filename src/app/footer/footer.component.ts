import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private document = inject(DOCUMENT);

  readonly year = new Date().getFullYear();

  scrollToTop(): void {
    const main = this.document.querySelector('.content') as HTMLElement | null;
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
