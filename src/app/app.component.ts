import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageService } from './services/language.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService,
  ) {
    this.languageService.init();
    this.themeService.init();
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // The scrollable area is <main class="content">, not the window, so the
    // router's scrollPositionRestoration can't reset it. Scroll it to the top
    // on every navigation so each page starts at the top.
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.document
          .getElementById('main-content')
          ?.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
  }
}
