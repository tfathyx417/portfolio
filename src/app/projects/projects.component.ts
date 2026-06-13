import { Component, inject } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { TranslatePipe } from '@ngx-translate/core';
import { GetlangPipe } from '../@pipes/getlang.pipe';
import { ProjectsService } from '../services/projects.service';
import { LanguageService } from '../services/language.service';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, TranslatePipe, GetlangPipe, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);
  private languageService = inject(LanguageService);

  readonly allProjects: Project[] = this.projectsService.getProjects();

  get featuredProject(): Project | undefined {
    return this.allProjects.find((p) => p.featured);
  }

  get otherProjects(): Project[] {
    return this.allProjects.filter((p) => !p.featured);
  }

  get totalProjects(): number {
    return this.allProjects.length;
  }

  get uniqueTechnologiesCount(): number {
    return new Set(this.allProjects.flatMap((p) => p.technologies)).size;
  }

  get lang() {
    return this.languageService.currentLang;
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
