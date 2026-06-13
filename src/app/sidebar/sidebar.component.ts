import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { ThemeService } from '../services/theme.service';
import { ChangelangComponent } from '../changelang/changelang.component';

@Component({
  selector: 'app-sidebar',
  imports: [TranslatePipe, RouterLink, RouterLinkActive, ChangelangComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isMenuOpen = signal(false);

  constructor(
    private languageService: LanguageService,
    public themeService: ThemeService,
  ) {}

  get currentLanguage() {
    return this.languageService.currentLang;
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
