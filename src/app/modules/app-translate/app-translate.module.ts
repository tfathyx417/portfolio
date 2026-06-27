import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import en from '../../../assets/i18n/en.json';
import ar from '../../../assets/i18n/ar.json';

type Translations = Record<string, string>;

const TRANSLATIONS: Record<string, Translations> = { en, ar };

// Translations are bundled and resolved synchronously instead of fetched over
// HTTP. This removes a render-blocking network round-trip on boot (every visible
// string uses the translate pipe) and keeps rendering correct under prerender/SSR.
class StaticTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<Translations> {
    return of(TRANSLATIONS[lang] ?? TRANSLATIONS['en']);
  }
}

const translateLoader: Provider = {
  provide: TranslateLoader,
  useClass: StaticTranslateLoader,
};

@NgModule({})
export class AppTranslateModule {
  static forRoot(): ModuleWithProviders<AppTranslateModule> {
    return TranslateModule.forRoot({
      loader: translateLoader,
    });
  }
}
