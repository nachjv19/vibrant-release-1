import { login } from "./auth";
import { validateEmail, validatePassword } from '../utils/validator.js';

export function renderLogin(){
    const container = document.createElement('div');
    container.innerHTML = `
    <h2>Login</h2>
    <form id="login-form">
    <input type="email" id="email" placeholder="Email" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit">Login</button>
    </form>
    <p id="login-error" style="color:red;"></p>
    <a href="#register">¿You don't have an account?</a> 
    `;

    const form = container.querySelector('#login-form');
    const error = container.querySelector('#login-error');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if(!validateEmail(email) || !validatePassword(password)){
            error.textContent = 'Invalid email or password.'
            return;
        }
        try {
            await login(email, password);
            location.hash = '#dashboard';
        } catch (err) {
            error.textContent = err.message;
        }
    });
    return container;
}