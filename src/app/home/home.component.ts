import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly techChips = ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'SCSS'];

  constructor(private languageService: LanguageService) {}

  get currentLanguage() {
    return this.languageService.currentLang;
  }
}
