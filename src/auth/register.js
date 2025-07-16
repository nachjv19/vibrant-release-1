import { register } from "./auth.js";
import { validateRegisterForm } from '../utils/validator.js';

export function renderRegister(){
    const container = document.createElement('div');
    container.innerHTML = `
    <h2>Registro</h2>
    <form id="register-form">
      <input type="text" id="name" placeholder="Name" required />
      <input type="email" id="email" placeholder="Email" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p id="register-error" style="color:red;"></p>
    <a href="#login">¿You already have an account?</a>
    `;

    const form = container.querySelector('#register-form');
    const error = container.querySelector('#register-error');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const userData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            password: form.password.value.trim()
        };

        const validation = validateRegisterForm(userData);
        if (validation) {
            error.textContent = validation;
            return;
        }

        try{
            await register(userData);
            alert('Registration successful. Log in.');
            location.hash = '#login';
        } catch (err){
            error.textContent = err.message;
        }
    });

    return container;
}

