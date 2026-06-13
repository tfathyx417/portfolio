import { Component, Input } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
    selector: 'app-changelang',
    imports: [],
    templateUrl: './changelang.component.html',
    styleUrl: './changelang.component.scss'
})
export class ChangelangComponent {
  @Input() iconOnly = false;
  constructor(private languageService: LanguageService) {}
  toggleLanguage() {
    const lang = this.languageService.currentLang === 'en' ? 'ar' : 'en';
    this.languageService.changeLanguage(lang);
  }

  get currentLanguage() {
    return this.languageService.currentLang;
  }
}
