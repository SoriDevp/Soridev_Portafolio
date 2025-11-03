# 🧭 **Documentación del Proyecto – Portafolio React estilo VS Code**

## 📌 **1. Objetivo del Proyecto**
El objetivo principal de este proyecto es **desarrollar un portafolio interactivo con estética y experiencia similares al editor Visual Studio Code**, combinando una interfaz moderna con animaciones fluidas y una arquitectura modular.

El portafolio servirá para **mostrar información personal, proyectos y medios de contacto**, a través de un diseño inspirado en la interfaz de desarrollo, lo que aporta un estilo técnico, profesional y visualmente atractivo.

### 🎯 Metas específicas
- Reproducir el entorno visual de VS Code: barra lateral, pestañas, iconografía y fondo oscuro.
- Organizar el contenido del portafolio en secciones (“home”, “about”, “projects”, “contact”).
- Permitir visualizar proyectos individuales en un panel dinámico (“ProjectDetails”).
- Mantener una arquitectura limpia, extensible y fácil de mantener.
- Lograr compatibilidad total con navegadores modernos y dispositivos móviles.

---

## 🧩 **2. Plan de Diseño**

### 🎨 **Tema visual**
- Paleta basada en el **Visual Studio Code Dark+ Theme**:
  - Fondo principal: `#1e1e1e`
  - Paneles secundarios: `#252526`
  - Texto: `#d4d4d4` y `#cccccc`
  - Bordes: `#3c3c3c`
- Tipografía: **"Consolas", "Fira Code" o monospace**
- Estilo general: limpio, técnico y sin elementos decorativos innecesarios.

### 🧱 **Estructura visual**
El layout principal está dividido en tres zonas:
1. **Sidebar** (panel lateral): contiene los iconos de navegación (home, about, projects, contact).
2. **Header** (barra superior): muestra el nombre del proyecto activo y un estilo de pestaña.
3. **Content** (panel principal): área donde se renderiza dinámicamente el contenido según la sección activa.
4. **Footer** Pié de página estático

### 📂 **Navegación**
El componente `Content.jsx` gestiona qué vista se muestra en función de:
- `activeSection` → indica la vista actual (“home”, “about”, “projects”, “contact”).
- `selectedProject` → si está definido, muestra `ProjectDetails` en lugar de `Projects`.

### 🖼️ **Diseño del componente About**
La vista `About` adoptará la **temática de la pantalla de extensiones de VS Code**, incluyendo una imagen representativa y una disposición similar a la interfaz de búsqueda de extensiones, con un listado o bloques visuales.

---

## ⚙️ **3. Arquitectura del Proyecto**

El proyecto sigue una arquitectura **basada en componentes**, utilizando React moderno con estructura funcional y hooks.  
Cada sección o característica está aislada en un componente independiente, lo que facilita el mantenimiento y la escalabilidad.


### 🔄 **Flujo de datos**
- El estado global (por ejemplo `activeSection` y `selectedProject`) se gestiona desde el componente principal (`App.jsx` o un contexto superior).
- `Content` recibe estos estados como props y decide qué vista renderizar.
- Los componentes hijo (como `Projects`) pueden actualizar `selectedProject` para mostrar detalles específicos.

---

## 🗂️ **4. Árbol de Directorios y Archivos (actual)**
```
mi-portafolio/
├── .gitignore              # Archivo para ignorar archivos y carpetas en Git (como node_modules)
├── index.html              # El punto de entrada HTML de tu aplicación Vite
├── package.json            # Define las dependencias y scripts del proyecto
├── README.md               # README principal de tu portafolio
├── vite.config.js          # Archivo de configuración de Vite
│
├── public/                 # 📂 Archivos estáticos que se sirven directamente
│   └── projects/           # 📂 Carpeta para el contenido de tus proyectos
│       ├── proyecto-uno/
│       │   ├── index.html
│       │   ├── README.md
│       │   └── preview.png
│       └── proyecto-dos/
│           ├── index.html
│           ├── README.md
│           └── preview.png
│
└── src/                    # 📂 Contiene todo el código fuente de tu aplicación React
    │
    ├── assets/             # 📂 Imágenes, fuentes, SVGs y otros activos globales
    │   └── logo.svg
    │
    ├── components/         # 📂 Componentes de React reutilizables
    │   │
    │   ├── layout/         # Componentes estructurales de la página
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   └── Sidebar.jsx
    │   │
    │   ├── ui/             # Componentes de UI pequeños y genéricos
    │   │   ├── Button.jsx
    │   │   └── Card.jsx
    │   │
    │   ├── ProjectCard.jsx   # Muestra la vista previa de un solo proyecto
    │   ├── ProjectList.jsx   # Muestra la cuadrícula con todos los ProjectCard
    │   └── ProjectDetails.jsx# Carga y muestra el README y el iframe de un proyecto
    │
    ├── data/               # 📂 Datos estáticos de la aplicación
    │   └── projects.json   # El "catálogo" de tus proyectos en formato JSON
    │
    ├── hooks/              # 📂 (Opcional) Para hooks personalizados si los necesitas
    │   └── useFetchProjects.js
    │
    ├── pages/ (o views/)   # 📂 Componentes que representan una página completa
    │   ├── HomePage.jsx
    │   ├── AboutPage.jsx
    │   └── PortfolioPage.jsx # Página principal que une ProjectList y ProjectDetails
    │
    ├── styles/             # 📂 (Opcional) Si prefieres CSS global o módulos
    │   ├── App.css
    │   └── index.css
    │
    ├── App.jsx             # Componente raíz que gestiona el enrutamiento
    └── main.jsx            # Punto de entrada de React, donde se renderiza la app
```

---

## 🧠 **5. Estado Actual del Desarrollo**

### ✅ **Completado**
- Estructura base del proyecto React.
- Configuración visual y temática oscura estilo VS Code.
- Navegación funcional entre secciones mediante `activeSection`.
- Sistema de renderizado condicional con `Content.jsx`.
- Diseño modular de componentes principales (`Sidebar`, `Header`, `Content`).

### ⚙️ **En desarrollo**
- Componente **About.jsx** con temática de la pantalla de extensiones.
- Contenido dinámico de la sección **Projects**, incluyendo listado interactivo.
- Integración de animaciones suaves (transiciones de cambio de vista).
- Ajustes de diseño responsivo.

### 🚧 **Pendiente / Próximos pasos**
1. Completar el contenido y diseño del componente `About` (pantalla de extensiones).
2. Incorporar los datos reales de proyectos (`Projects` y `ProjectDetails`).
3. Añadir un sistema de estado global (Context API o Zustand) si se amplía la complejidad.
4. Implementar animaciones con `framer-motion` y efectos visuales en hover.
5. Preparar la versión final para despliegue (por ejemplo, GitHub Pages o Vercel).

---

## 🧩 **6. Tecnologías y Herramientas**

| Herramienta / Librería | Uso |
|--------------------------|-----|
| **React 18+** | Base del proyecto y arquitectura por componentes |
| **TailwindCSS** | Estilos rápidos y consistentes |
| **Framer Motion** *(pendiente)* | Animaciones y transiciones fluidas |
| **Vite** | Empaquetador rápido para desarrollo React |
| **Node.js / npm** | Entorno de ejecución y gestión de dependencias |

---

## 📘 **7. Convenciones de Código**
- Componentes con **mayúscula inicial** (`About.jsx`, `Projects.jsx`…).
- Clases y colores adaptados a la paleta VS Code.
- Código formateado con **Prettier** y reglas de ESLint.
- Uso preferente de **funciones flecha** y **hooks** (`useState`, `useEffect`).
- Nombres claros y semánticos para props y estados.

---

## 🚀 **8. Futuro y Dirección**
El objetivo final es convertir este portafolio en una **aplicación interactiva y visualmente inmersiva**, que combine estética de editor de código, animaciones suaves y contenido real de desarrollo.

Se prevé incluir:
- Animaciones entre secciones (fade / slide).
- Efecto de pestañas activas.
- Un modo “terminal interactiva” para contacto.
- Carga dinámica de proyectos desde un JSON o API.
