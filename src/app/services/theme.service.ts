import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly KEY = 'theme';
  theme = signal<'dark' | 'light'>('dark');

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  init() {
    if (!isPlatformBrowser(this.platformId)) {
      this.apply('dark');
      return;
    }
    const saved = localStorage.getItem(this.KEY) as 'dark' | 'light' | null;
    const systemDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
    this.apply(saved ?? (systemDark ? 'dark' : 'light'));
  }

  toggleTheme() {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  get isDark() {
    return this.theme() === 'dark';
  }

  private apply(theme: 'dark' | 'light') {
    this.theme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.KEY, theme);
    }
  }
}
