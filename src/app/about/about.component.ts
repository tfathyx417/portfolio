import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

interface TechItem {
  name: string;
  img: string;
}

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly techStack: TechItem[] = [
    { name: 'HTML5',       img: 'assets/images/html.png' },
    { name: 'CSS3',        img: 'assets/images/css.png' },
    { name: 'Sass',        img: 'assets/images/sass.png' },
    { name: 'Bootstrap',   img: 'assets/images/bootstrap.png' },
    { name: 'Tailwind',    img: 'https://cdn.simpleicons.org/tailwindcss/38bdf8' },
    { name: 'JavaScript',  img: 'assets/images/js.jpg' },
    { name: 'TypeScript',  img: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Angular',     img: 'assets/images/angular.png' },
    { name: 'React',       img: 'assets/images/react.png' },
    { name: 'NGXS',        img: 'assets/images/ngxs.png' },
  ];

  get currentLanguage() {
    return this.languageService.currentLang;
  }

  constructor(
    private router: Router,
    private languageService: LanguageService,
  ) {}

  goToWork() {
    this.router.navigate(['/projects']);
  }
}
