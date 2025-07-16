# vibrant-release-1
 

 update 1.0: sistema completo de autenticacion con simulacion de tokens y proteccion de rutas y datos sensibles accesibles desde localstorage:

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

## 📁 Estructura del proyecto


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

como ejecutar en sus equipos: 
en visual studio abran la consola y escriban los siguiente:

npm i
npm run dev
json-server --watch db.json --port 3000

### Estado actual✅
-Autenticación por roles

-Login y registro con validaciones

-Sesiones en localStorage

-Control por expiración

-Forgot password simulado

-Navegación dinámica
