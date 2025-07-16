import { getCurrentUser, isAuthenticated } from '../utils/session.js';
import { logout  } from '../auth/auth';

export function renderNavbar() {
    if(!isAuthenticated()) return document.createElement('div');

    const user = getCurrentUser();
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    let links = '';

    if(user.role === 'admin'){
        links= `
        <a href="#dashboard">Dashboard</a>
        <a href="#manage-users">Users</a>
         <a href="#support">Support</a>
        `;
    }

    if(user.role === 'hoster'){
        links = `
        <a href="#dashboard">My business</a>
        <a href="#create-event">Create event</a>
        <a href="#my-events">My events</a>
        `;
    }

    if(user.role === 'user'){
        links = `
        <a href="#dashboard">Home</a>
        <a href="#explore">Explore events</a>
        <a href="#my-bookings">My bookeds</a>
        `;
    }
    
     nav.innerHTML = `
    <div class="nav-left">
      <strong>Hi!, ${user.name}</strong>
    </div>
    <div class="nav-center">
      ${links}
    </div>
    <div class="nav-right">
      <button id="logout-btn">Logout</button>
    </div>
  `;

    nav.querySelector('#logout-btn').addEventListener('click', logout);
    return nav;
}