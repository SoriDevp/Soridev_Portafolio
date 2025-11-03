Panel de Dashboard de Mascotas

Este proyecto es una interfaz de usuario (UI) de una sola página (SPA) que simula un panel de control para gestionar mascotas. Está construido intencionalmente con HTML, Tailwind CSS y JavaScript puro (Vanilla JS) para demostrar cómo crear una aplicación reactiva y basada en componentes sin depender de un framework como React o Vue.

La aplicación carga una lista de mascotas y permite al usuario seleccionar una para ver sus detalles, activar/desactivar el "modo extravío" y ver acciones relacionadas.

✨ Características

Header Fijo: Una barra de navegación superior que permanece visible al hacer scroll (sticky top-0).

Selector de Mascotas: Un carrusel horizontal (overflow-x-auto) que muestra la lista de mascotas. El ítem seleccionado tiene un estilo visual distintivo.

Panel de Detalles Reactivo: El contenido principal de la página (el perfil de la mascota) se actualiza dinámicamente al seleccionar una mascota diferente del carrusel.

Gestión de Estado (Simulada): El estado de la aplicación (como la mascota activa o el "modo extravío") se maneja en un array de JavaScript (petItems) y una variable (activeId). La UI se vuelve a renderizar (renderUI()) cuando este estado cambia.

Renderizado Condicional:

Muestra las iniciales de la mascota si no hay una imagen disponible.

El botón "Modo Extravío" cambia de color y texto según el estado (lostMode).

Las insignias de estado (placa activa/inactiva) y la información de actividad cambian según los datos de la mascota.

Componentes Dinámicos: La lista de mascotas, los botones de acción rápida y el perfil de la mascota se generan dinámicamente con JavaScript usando template literals.

Diseño Moderno: Estilizado completamente con Tailwind CSS, incluyendo modo oscuro (dark:), gradientes y efectos de backdrop-blur.

🛠️ Tecnologías Utilizadas

HTML5: Para la estructura semántica del documento.

Tailwind CSS (vía CDN): Para todo el estilizado de utilidades (utility-first).

JavaScript (ES6+ "Vanilla"): Para toda la lógica de la aplicación, manipulación del DOM y gestión de estado.

Bootstrap Icons (vía CDN): Para la iconografía de la aplicación.

🚀 Cómo Ejecutarlo

Este proyecto no requiere un servidor ni un proceso de compilación (build).

Asegúrate de tener conexión a internet (para cargar los CDNs de Tailwind y Bootstrap Icons).

Simplemente abre el archivo index.html en tu navegador web preferido (como Chrome, Firefox, o Edge).

¡Y eso es todo! La aplicación es completamente funcional tal cual.

💡 Concepto del Proyecto: "React" con Vanilla JS

El objetivo principal de este código es replicar el patrón de desarrollo declarativo y basado en estado de React, pero usando solo JavaScript puro.

Estado Centralizado: El array petItems y la variable activeId actúan como el "estado" (state) de la aplicación.

Función de Renderizado Única: La función renderUI() actúa como el "componente raíz". Se encarga de dibujar toda la interfaz basándose en el estado actual. Es similar a la función render() de un componente de React.

Eventos que Modifican el Estado: Funciones como handlePetChange() o handleToggleLost() actúan como los dispatchers de acciones. Su único trabajo es modificar las variables del estado.

Re-renderizado: Después de que un evento modifica el estado, se vuelve a llamar a renderUI(). Esta función limpia (.innerHTML = '') y vuelve a dibujar la interfaz desde cero, asegurando que lo que se ve en pantalla siempre coincide con el estado actual.