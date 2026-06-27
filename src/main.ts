import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

function hideLoader() {
  const loader = document.getElementById('app-loader');
  if (!loader) return;
  loader.classList.add('app-loader--hide');
  loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  // Fallback removal in case the transition never fires.
  setTimeout(() => loader.remove(), 600);
}

bootstrapApplication(AppComponent, appConfig)
  .then(hideLoader)
  .catch((err) => {
    console.error(err);
    hideLoader();
  });
