// src/router/router.js

import { getCurrentUser, isAuthenticated } from '../utils/session.js';
import { logout } from '../auth/auth.js';
import { renderNavbar } from '../components/navbar.js';

// ⚙️ Enrutador principal
export function router() {
  const app = document.getElementById('app');
  const hash = window.location.hash;

  switch (hash) {
    case '#login':
      import('../auth/login.js').then(module => {
        app.innerHTML = '';
        app.appendChild(module.renderLogin());
      });
      break;

    case '#register':
      import('../auth/register.js').then(module => {
        app.innerHTML = '';
        app.appendChild(module.renderRegister());
      });
      break;

    case '#dashboard':
      import('../utils/dashboard.js').then(module => {
        app.innerHTML = '';
        app.appendChild(module.renderDashboard());
      });
      break;

    case '#404':
      app.innerHTML = '<h2>404 - Página no encontrada</h2>';
      break;

    default:
      // Redirigir si no hay hash o es inválido
      window.location.hash = isAuthenticated() ? '#dashboard' : '#login';
      break;
  }
}
