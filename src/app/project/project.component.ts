import { Component, input } from '@angular/core';
import { GetlangPipe } from '../@pipes/getlang.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  imports: [GetlangPipe, TranslatePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  project = input.required<Project>();

  constructor(private languageService: LanguageService) {}

  get lang() {
    return this.languageService.currentLang;
  }
}
