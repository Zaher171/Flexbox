# Murcia Pinterest | Pueblos con Encanto

## Descripción del proyecto
Este proyecto consiste en una **galería interactiva estilo Pinterest** que muestra los pueblos más encantadores de la Región de Murcia. Cada tarjeta incluye una imagen representativa del lugar, un breve texto descriptivo, botones de interacción (me gusta y enlace externo) y un botón de acción para "Visitar". El proyecto está pensado como una **práctica educativa** de diseño web y accesibilidad.

---

## Funcionalidades
- **Diseño responsive:** La página se adapta a distintos tamaños de pantalla, desde móviles hasta escritorio.
- **Galería de pueblos:** Cada pueblo está representado mediante una tarjeta (`article`) con imagen, nombre y botones interactivos.
- **Interactividad:** 
  - Botón de "Me gusta" con icono de corazón.
  - Enlace externo que abre la página oficial del pueblo en una nueva pestaña.
  - Botón de acción "Visitar".
- **Accesibilidad:** Uso de `tabindex` en tarjetas y `aria-label` en botones para mejorar la navegación con teclado y lectores de pantalla.
- **Sidebar de navegación:** Menú lateral con enlaces a Inicio, Explorar y Tendencias.
- **Encabezado y pie de página:** Incluyen el título del sitio y derechos de autor.

---

## Tecnologías utilizadas
- **HTML5:** Estructura principal del proyecto.
- **CSS3:** Estilos y diseño del layout (archivo `styles.css`).
- **Font Awesome:** Iconos para botones y enlaces (CDN).
- **JavaScript:** Funcionalidad adicional (archivo `apps.js`).
- **Responsive Design:** Ajuste a distintos dispositivos mediante meta viewport y grid CSS.

---

## Estructura del proyecto
/proyecto-murcia
│
├── index.html # Página principal con la galería
├── styles.css # Estilos CSS del proyecto
├── apps.js # Scripts JS para interactividad
└── README.md # Documentación del proyecto
