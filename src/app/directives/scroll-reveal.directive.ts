import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'left' | 'right' | 'none' = 'up';

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    // On the server (prerender) leave the element fully visible so the rendered
    // HTML — including the hero/LCP content — paints immediately.
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.el.nativeElement;

    // Content already in the viewport on load is shown immediately (no fade-in),
    // so it doesn't start invisible and delay the Largest Contentful Paint.
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < (window.innerHeight || 0);
    if (alreadyVisible) return;

    const offsetMap: Record<string, string> = {
      up: 'translateY(28px)',
      left: 'translateX(-28px)',
      right: 'translateX(28px)',
      none: 'none',
    };

    el.style.opacity = '0';
    el.style.transform = offsetMap[this.revealDirection];
    el.style.transition = `opacity 0.6s ease ${this.revealDelay}ms, transform 0.6s ease ${this.revealDelay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          this.observer?.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' },
    );

    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
