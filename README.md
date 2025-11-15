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
  - **Componentes Modulares**: La aplicación está construida con componentes reutilizables y bien definidos, organizados por responsabilidad (layout, sections, ui).
  - **Datos Centralizados**: La información de proyectos y educación se gestiona desde archivos JSON en la carpeta `src/data`, separando los datos de la presentación.
  - **Hooks Personalizados**: Uso de hooks como `useEducationData` y `useProjectsData` para una carga de datos limpia y eficiente.
  - **Context API**: Gestión de estado global mediante `PortfolioContext` para controlar secciones activas, paneles laterales y proyectos seleccionados.
- **Explorador de Proyectos Interactivo**:
  - Panel lateral colapsable que muestra todos los proyectos disponibles.
  - Visualización de tecnologías mediante iconos personalizados.
  - Integración con vista detallada de proyectos.
- **Componente Terminal Animado**:
  - Terminal simulada con animación de escritura línea por línea.
  - Utilizado para mostrar información de forma dinámica y atractiva.

---

## 🛠️ Stack Tecnológico

| Tecnología            | Versión  | Descripción                                                                                                |
| :-------------------- | :------- | :--------------------------------------------------------------------------------------------------------- |
| **React**             | 19.1.1   | Librería principal para construir la interfaz de usuario con una arquitectura basada en componentes.       |
| **Vite**              | 7.1.7    | Herramienta de desarrollo y empaquetado ultra rápida que ofrece una experiencia de desarrollo inmejorable. |
| **TailwindCSS**       | 4.1.16   | Framework CSS "utility-first" para un diseño rápido, responsivo y personalizable sin salir del HTML.       |
| **Framer Motion**     | 12.23.24 | Librería de animaciones para React que permite crear transiciones y animaciones fluidas.                   |
| **React Icons**       | 5.5.0    | Librería para incluir una amplia variedad de iconos SVG de alta calidad.                                   |
| **React Markdown**    | 10.1.0   | Componente para renderizar contenido Markdown en React, utilizado para mostrar READMEs de proyectos.       |
| **Remark GFM**        | 4.0.1    | Plugin para react-markdown que añade soporte para GitHub Flavored Markdown.                                |
| **JavaScript (ES6+)** | -        | Lenguaje base para toda la lógica de la aplicación.                                                        |

---

## 📂 Arquitectura del Proyecto

La estructura del proyecto está organizada para ser escalable y fácil de mantener:

```
/src
├── assets/                    # Recursos estáticos del proyecto
│   ├── icons/                 # Iconos personalizados (SVG como componentes React)
│   │   ├── tech/              # Iconos de tecnologías (React, TypeScript, Node.js, etc.)
│   │   └── social/            # Iconos de redes sociales
│   ├── images/                # Imágenes utilizadas en el portafolio
│   └── logo/                  # Logos del proyecto
│
├── components/                # Componentes reutilizables
│   ├── layout/                # Componentes de estructura principal
│   │   ├── Header.jsx         # Cabecera fija superior
│   │   ├── Sidebar.jsx        # Barra lateral de navegación
│   │   ├── Content.jsx        # Contenedor principal de contenido
│   │   ├── Footer.jsx         # Pie de página
│   │   └── CollapsiblePanel.jsx # Panel colapsable lateral (explorador de proyectos)
│   ├── sections/              # Módulos de contenido para la página "About"
│   │   ├── About_Introduction.jsx # Sección de introducción con galaxia de tecnologías
│   │   ├── About_Education.jsx    # Sección de formación y educación
│   │   └── About_Experience.jsx   # Sección de experiencia profesional
│   ├── ui/                    # Componentes de interfaz de usuario
│   │   ├── Terminal.jsx       # Componente de terminal animado
│   │   └── LineNumbers.jsx   # Componente para mostrar números de línea
│   ├── ProjectExplorer.jsx    # Explorador de proyectos (panel lateral)
│   └── ProjectDetails.jsx    # Vista detallada de un proyecto
│
├── context/                   # Contexto de React para el estado global
│   └── PortfolioContext.jsx   # Contexto principal que gestiona el estado de la aplicación
│
├── data/                      # Archivos JSON con los datos de la aplicación
│   ├── projects.json          # Información de proyectos
│   ├── education.json         # Datos de formación y educación
│   └── themes.js              # Configuración de temas
│
├── hooks/                     # Hooks personalizados para la lógica de negocio
│   ├── useEducationData.js    # Hook para cargar datos de educación
│   └── useProjectsData.js     # Hook para cargar y gestionar proyectos
│
├── pages/                     # Componentes que representan una página completa
│   ├── HomePage.jsx           # Página de inicio
│   ├── AboutPage.jsx          # Página "Sobre Mí" con pestañas
│   ├── ProjectsPage.jsx       # Página de proyectos
│   ├── PortfolioPage.jsx      # Página de portafolio
│   ├── ContactPage.jsx        # Página de contacto
│   ├── ContactPageTerminal.jsx # Versión terminal de la página de contacto
│   ├── SettingsPage.jsx       # Página de configuración
│   └── ExtensionsPage.jsx     # Página de extensiones
│
├── App.jsx                    # Componente raíz que gestiona la estructura principal
└── main.jsx                   # Punto de entrada de la aplicación React
```

---

## 🚀 Cómo Empezar

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio:**

    ```sh
    git clone <url-del-repositorio>
    ```

2.  **Navega al directorio del proyecto:**

    ```sh
    cd Soridev_PortafolioV2
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

6.  **Para previsualizar la versión de producción:**

    ```sh
    npm run preview
    ```

    Útil para probar la versión de producción localmente antes de desplegar.

7.  **Para ejecutar el linter:**
    ```sh
    npm run lint
    ```
    Verifica el código en busca de errores y problemas de estilo.

---

## 📊 Estructura de Datos

El proyecto utiliza archivos JSON para gestionar los datos de forma centralizada:

### `projects.json`

Contiene la información de todos los proyectos del portafolio:

- `id`: Identificador único del proyecto
- `name`: Nombre del proyecto
- `description`: Descripción breve
- `technologies`: Array de tecnologías utilizadas
- `readmeUrl`: Ruta al archivo README del proyecto (opcional, se usa como fallback si GitHub falla)
- `repoUrl`: URL del repositorio en GitHub. Soporta múltiples formatos:
  - `https://github.com/owner/repo` - URL simple del repositorio
  - `https://github.com/owner/repo/blob/main/README.md` - URL en formato blob (se extrae automáticamente la rama y el path)
  - `https://github.com/owner/repo/blob/branch/path/to/README.md` - URL blob con rama y path específicos
- `liveUrl`: URL de la versión en vivo (si está disponible)

**Nota**: El sistema obtiene automáticamente el README desde GitHub usando la URL raw. Si la `repoUrl` está en formato blob, se extrae automáticamente la rama y se convierte a formato raw. Si falla la obtención desde GitHub, se usa `readmeUrl` como fallback.

### `education.json`

Estructura que organiza la formación en tres categorías:

- `formal`: Educación reglada (grados, títulos oficiales)
- `complementary`: Cursos y bootcamps complementarios
- `languages`: Idiomas con nivel de competencia

---

## 🎯 Funcionalidades Clave

### Gestión de Estado

- **PortfolioContext**: Contexto global que gestiona:
  - Sección activa de la aplicación
  - Estado de paneles laterales (abierto/cerrado)
  - Contenido del panel (proyectos, búsqueda, etc.)
  - Proyecto seleccionado actualmente

### Componentes Principales

#### Layout

- **Header**: Barra superior fija con información y controles principales
- **Sidebar**: Navegación lateral con iconos de secciones
- **Content**: Área principal de contenido que renderiza las diferentes páginas
- **CollapsiblePanel**: Panel lateral colapsable para mostrar contenido adicional (explorador de proyectos)
- **Footer**: Pie de página con información adicional

#### Páginas

- **HomePage**: Página de bienvenida e introducción
- **AboutPage**: Página "Sobre Mí" con sistema de pestañas (Detalles, Formación, Experiencia)
- **ProjectsPage**: Vista de todos los proyectos
- **PortfolioPage**: Vista detallada del portafolio
- **ContactPage**: Página de contacto con formulario
- **SettingsPage**: Configuración de la aplicación

#### Componentes Especializados

- **ProjectExplorer**: Explorador de proyectos con iconos de tecnologías
- **ProjectDetails**: Vista detallada de proyectos con iconos de tecnologías en lugar de texto, obtención automática de README desde GitHub
- **Terminal**: Componente de terminal animado con efecto de escritura
- **About_Introduction**: Galaxia de tecnologías animada
- **About_Education**: Línea de tiempo de formación
- **About_Experience**: Línea de tiempo de experiencia profesional

## 🔄 Historial de Cambios (Resumen)

Este proyecto ha pasado por una refactorización significativa para mejorar su arquitectura, diseño y rendimiento.

- **Reestructuración de la Página "Sobre Mí"**: Se descompuso la página en componentes modulares y especializados (`About_Introduction`, `About_Education`, `About_Experience`) con carga diferida.
- **Mejoras Visuales y de UX**:
  - Se implementó la **"Galaxia de Tecnologías"**, una visualización animada para las habilidades.
  - Se diseñó e implementó una **línea de tiempo dual** en la sección de Educación para mostrar tanto la "galaxia" como un currículum formal.
  - Se creó la **línea de tiempo de "Crecimiento Profesional"** en la sección de Experiencia para conectar proyectos con aprendizaje.
  - Se añadió el componente **Terminal** para mostrar información de forma dinámica.
- **Optimización de Arquitectura y Rendimiento**:
  - Se desacopló la lógica de los datos moviendo el contenido a archivos JSON dedicados.
  - Se crearon **hooks personalizados** (`useEducationData`, `useProjectsData`) para centralizar la lógica de obtención de datos.
  - Se implementó **Lazy Loading** con `React.lazy` y `Suspense` para optimizar drásticamente el tiempo de carga inicial.
  - Se implementó **Context API** para gestión de estado global.
  - Se mejoró la obtención de README desde GitHub para soportar múltiples formatos de URL (formato simple y formato blob), extrayendo automáticamente la rama y el path del archivo.
- **Correcciones de Diseño Responsivo**:
  - Se solucionaron múltiples problemas de layout en dispositivos móviles, incluyendo la visibilidad del avatar en la cabecera y la superposición de elementos en las líneas de tiempo.
  - Se mejoró la experiencia en el explorador de proyectos para dispositivos móviles.
- **Mejoras en Visualización de Tecnologías**:
  - Se implementó visualización de iconos de tecnologías en `ProjectDetails` en lugar de texto, mejorando la experiencia visual y manteniendo tooltips informativos.
