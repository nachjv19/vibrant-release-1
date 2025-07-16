# 🧠 Módulo de Autenticación y Navegación SPA

Este módulo implementa la base funcional de una SPA con autenticación, control de roles y navegación dinámica, usando **JavaScript Vanilla**, **Axios**, **Vite** y **JSON Server** como backend simulado.

---

## 🔧 Tecnologías usadas

- ⚙️ [Vite](https://vitejs.dev/)
- ⚡ JavaScript Vanilla (ES Modules)
- 🔐 JSON Server como backend simulado
- 🌐 Axios para consumo de API
- 🔒 SHA-256 para hasheo de contraseñas


---

## 🔐 Autenticación

### ✅ `auth.js`

- `login(email, password)`
  - Valida credenciales con hash SHA-256
  - Verifica si el usuario está activo
  - Genera token y guarda sesión

- `register(userData)`
  - Valida email único
  - Crea nuevo usuario con `role`, `is_active`, `createdAt`

- `logout()`
  - Elimina sesión del `localStorage`

- `getLoggedUser()`
  - Retorna el usuario actual autenticado

---

## 🔑 Hash de Contraseñas

### ✅ `hash.js`

- Usa `crypto.subtle.digest` para convertir contraseñas en SHA-256
- Protege el almacenamiento en JSON Server

---

## 📦 Validación

### ✅ `validator.js`

- Validación de:
  - Email
  - Contraseñas vacías
  - Campos obligatorios

---

## 💾 Manejo de Sesiones

### ✅ `session.js`

- `isAuthenticated()`: comprueba si hay sesión activa
- `getCurrentUser()`: retorna sesión
- `isAdmin()`, `isHoster()`, `isUser()`: control de roles
- `isExpired()`: verificación por `expiresAt`

---

## 🧭 Navegación SPA

### ✅ `router.js`

- Navegación con `window.location.hash`
- Carga dinámica de vistas (`await import(...)`)
- Redirección automática según autenticación

---

## 📄 Vistas

### ✅ `login.js`

- Formulario de acceso
- Llama a `login()` y redirige según rol

### ✅ `register.js`

- Registro de nuevo usuario
- Llama a `register()` y redirige a login

### ✅ `forgot-password.js`

- Simula recuperación de contraseña
- Valida existencia de email y muestra mensaje

---

## 🧩 Componentes

### ✅ `navbar.js`

- Navbar dinámico por rol
- Muestra botón de logout

### ✅ `dashboard.js`

- Vista base post-login

---

## 🗃️ db.json (estructura mínima)

```json
{
  "users": [
    {
      "id": 1,
      "name": "Admin",
      "email": "admin@test.com",
      "password": "hashed_password",
      "role": "admin",
      "is_active": true,
      "createdAt": "2025-07-16T12:00:00Z"
    }
  ]
}

## Para iniciar el proyecto en visual studio:
abre la consola y escribe:
npm i
npm run dev
json-server --watch .\src\database\db.json --port 3000

### ✅ Estado actual
- Autenticación por roles

- Login y registro con validaciones

- Sesiones en localStorage

- Control por expiración

- Forgot password simulado(en proceso)

- Navegación dinámica


