export function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export function validatePassword(password) {
    return password.length >= 4;
}

export function validateRegisterForm({name, email, password}) {
    if(!name || name.length < 2) return 'Invalid Username';
    if(!validateEmail(email)) return 'Invalid email';
    if(!validatePassword(password)) return 'Password too short';
    return null;
}