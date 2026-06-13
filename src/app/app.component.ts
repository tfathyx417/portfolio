import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  loading = false;

  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService,
  ) {
    this.languageService.init();
    this.themeService.init();
  }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => (this.loading = false), 400);
  }
}
