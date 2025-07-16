export function getSession(){
    return JSON.parse(localStorage.getItem('session'));
}

export function isAuthenticated() {
  const session = getSession();
  return session && Date.now() < session.expiresAt;
}

export function getCurrentUser() {
    return getSession()?.user || null;
}

export function requiredAuth(){
    if(!isAuthenticated()) {
        window.location.hash = '#login';
    }
}

export function requireRole(allowedRoles = []) {
  const user = getCurrentUser();
  if (!user || !allowedRoles.includes(user.role)) {
    window.location.hash = '#login';
  }
}