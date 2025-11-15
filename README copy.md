# Portfolio v2 – SoriDev 

Un portafolio interactivo y dinámico con una estética inspirada en **Visual Studio Code**, diseñado para mostrar mis habilidades, proyectos y trayectoria profesional de una manera única y técnica.

---

## ✨ Características Principales

- **Interfaz Inspirada en VS Code**: Diseño que simula el entorno de un editor de código, con una paleta de colores Dark+, iconografía técnica y una estructura familiar para los desarrolladores.
- **Diseño Totalmente Responsivo**: La interfaz se adapta fluidamente a cualquier tamaño de pantalla, desde dispositivos móviles hasta monitores de escritorio, con una experiencia de usuario consistente.
- **Sección "Sobre Mí" Dinámica y Modular**:
  - **Carga Diferida (Lazy Loading)**: Los componentes de las pestañas se cargan bajo demanda usando `React.lazy` y `Suspense` para una máxima eficiencia en la carga inicial.
  - **Galaxia de Tecnologías**: Una visualización animada e interactiva de mis habilidades, donde los iconos de las tecnologías flotan dinámicamente.
  - **Currículum Integrado**: La sección de formación combina la "galaxia" con una línea de tiempo formal que detalla mi educación reglada, complementaria e idiomas.
- **Experiencia como un Camino de Crecimiento**:
  - Una línea de tiempo visual que conecta mis proyectos personales con mi crecimiento profesional, demostrando la aplicación práctica de mis habilidades.
- **Arquitectura Moderna y Desacoplada**:
  - **Componentes Modulares**: La aplicación está construida con componentes reutilizables y bien definidos.
  - **Datos Centralizados**: La información de proyectos y educación se gestiona desde archivos JSON en la carpeta `src/data`, separando los datos de la presentación.
  - **Hooks Personalizados**: Uso de hooks como `useEducationData` para una carga de datos limpia y eficiente.

---

## 🛠️ Stack Tecnológico

| Tecnología | Descripción |
| :--- | :--- |
| **React 18+** | Librería principal para construir la interfaz de usuario con una arquitectura basada en componentes. |
| **Vite** | Herramienta de desarrollo y empaquetado ultra rápida que ofrece una experiencia de desarrollo inmejorable. |
| **TailwindCSS** | Framework CSS "utility-first" para un diseño rápido, responsivo y personalizable sin salir del HTML. |
| **React Icons** | Librería para incluir una amplia variedad de iconos SVG de alta calidad. |
| **JavaScript (ES6+)**| Lenguaje base para toda la lógica de la aplicación. |

---

## 📂 Arquitectura del Proyecto

La estructura del proyecto está organizada para ser escalable y fácil de mantener:

```
/src
├── assets/         # Iconos, imágenes y otros archivos estáticos.
├── components/     # Componentes reutilizables.
│   └── sections/   # Módulos de contenido para la página "About".
├── context/        # Contexto de React para el estado global.
├── data/           # Archivos JSON con los datos de la aplicación (proyectos, educación).
├── hooks/          # Hooks personalizados para la lógica de negocio (ej: useEducationData).
├── pages/          # Componentes que representan una página completa.
├── App.jsx         # Componente raíz que gestiona la estructura principal.
└── main.jsx        # Punto de entrada de la aplicación React.
```

---

## 🚀 Cómo Empezar

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2.  **Navega al directorio del proyecto:**
    ```sh
    cd tu-repositorio
    ```

3.  **Instala las dependencias:**
    ```sh
    npm install
    ```

4.  **Inicia el servidor de desarrollo:**
    ```sh
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

5.  **Para construir la versión de producción:**
    ```sh
    npm run build
    ```
    Los archivos optimizados se generarán en la carpeta `dist/`.

---

## 🔄 Historial de Cambios (Resumen)

Este proyecto ha pasado por una refactorización significativa para mejorar su arquitectura, diseño y rendimiento.

- **Reestructuración de la Página "Sobre Mí"**: Se descompuso la página en componentes modulares y especializados (`About_Introduction`, `About_Education`, `About_Experience`).
- **Mejoras Visuales y de UX**:
  - Se implementó la **"Galaxia de Tecnologías"**, una visualización animada para las habilidades.
  - Se diseñó e implementó una **línea de tiempo dual** en la sección de Educación para mostrar tanto la "galaxia" como un currículum formal.
  - Se creó la **línea de tiempo de "Crecimiento Profesional"** en la sección de Experiencia para conectar proyectos con aprendizaje.
- **Optimización de Arquitectura y Rendimiento**:
  - Se desacopló la lógica de los datos moviendo el contenido a archivos JSON dedicados.
  - Se crearon **hooks personalizados** para centralizar la lógica de obtención de datos.
  - Se implementó **Lazy Loading** con `React.lazy` y `Suspense` para optimizar drásticamente el tiempo de carga inicial.
- **Correcciones de Diseño Responsivo**:
  - Se solucionaron múltiples problemas de layout en dispositivos móviles, incluyendo la visibilidad del avatar en la cabecera y la superposición de elementos en las líneas de tiempo.