import api from '../services/api.js';
import { hashPassword } from '../utils/hash.js';

export async function login(email, password) {
    const { data } = await api.get(`/users?email=${email}`);
    const user = data [0];

    if(!user)throw new Error('User not Found');

    const hashed = await hashPassword(password);
    if(user.password !== hashed || !user.is_active)
        throw new Error('Invalid credentials or deactivated account');
    

        const token = crypto.randomUUID();
        const session = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
             },
             token,
             expiresAt: Date.now() + 60 * 60 * 1000
        };
        localStorage.setItem('session', JSON.stringify(session));
        return session.user;
}

export async function register(userData) {
    const { data: existing } = await api.get(`/users?email=${userData.email}`);
    if(existing.length) throw new Error ('Email already registered');

    const hashedPassword = await hashPassword(userData.password);

    const { data } = await api.post('/users', {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: 'user',
        is_active: true,
        createAt: new Date().toISOString()
    });
    return data;
}

export function logout(){
    localStorage.removeItem('session');
    window.location.hash = '#login';
}

export function getLoggedUser(){
    const session = JSON.parse(localStorage.getItem('session'));
    return session?.user || null;
}