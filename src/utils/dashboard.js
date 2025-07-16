// src/components/dashboard.js
import { getCurrentUser, isAuthenticated } from '../utils/session.js';
import { renderNavbar } from '../components/navbar.js';

export function renderDashboard() {
  const container = document.createElement('div');

  if (!isAuthenticated()) {
    window.location.hash = '#login';
    return container;
  }

  const user = getCurrentUser();
  const nav = renderNavbar();
  container.appendChild(nav);

  const message = document.createElement('p');
  message.textContent = `Bienvenido, ${user.name} (${user.role})`;

  container.appendChild(message);

  return container;
}
