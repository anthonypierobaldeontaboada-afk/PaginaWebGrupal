# IESTP Huanta - Sitio Web Dinámico

Sitio web dinámico del Instituto de Educación Superior Tecnológico Público Huanta, construido con HTML, CSS (Tailwind CSS v4) y JavaScript vanilla.

## Características

- **Diseño moderno y responsivo** - Adaptado a todos los dispositivos
- **Renderizado dinámico con JavaScript** - Todas las secciones se generan dinámicamente desde un archivo de datos centralizado
- **Animaciones suaves** - Efectos de scroll y transiciones fluidas
- **Accesibilidad** - HTML semántico y atributos ARIA
- **Optimizado para SEO** - Meta tags y estructura semántica

## Estructura del Proyecto

```
PaginaWeb/
├── index.html              # Página principal (contenido renderizado dinámicamente)
├── css/
│   ├── tailwind.css        # Fuente de estilos Tailwind + personalizaciones
│   └── tailwind.generated.css  # CSS generado (no editar manualmente)
├── js/
│   ├── data.js             # Datos centralizados del sitio (carreras, servicios, etc.)
│   ├── app.js              # Lógica principal - renderiza todas las secciones
│   └── footer.js           # Footer dinámico para páginas internas
├── pages/                  # Páginas internas
│   ├── admision.html
│   ├── nosotros.html
│   ├── carreras.html
│   ├── servicios.html
│   ├── eventos.html
│   ├── galeria.html
│   ├── noticias.html
│   ├── contacto.html
│   ├── transparencia.html
│   ├── tramites.html
│   └── matricula.html
├── assets/                 # Recursos estáticos
│   ├── logo.png
│   ├── hero-graduado.jpg
│   └── presentacion-instituto.jpg
├── components/             # Componentes HTML reutilizables (referencia)
└── package.json
```

## Desarrollo

### Instalación

```bash
npm install
```

### Comandos disponibles

```bash
# Iniciar servidor de desarrollo con recarga en vivo y compilación Tailwind continua
npm run dev

# Generar CSS de Tailwind (producción / minificado)
npm run build:css

# Modo watch solo para CSS
npm run watch:css

# Servir sitio estático
npm run serve
```

## Arquitectura Dinámica

El sitio usa un enfoque basado en datos:

1. **`js/data.js`** - Contiene toda la información del sitio (carreras, servicios, eventos, etc.)
2. **`js/app.js`** - Renderiza dinámicamente todas las secciones del index.html
3. **`js/footer.js`** - Genera el footer en las páginas internas

### Agregar nueva información

Para agregar una nueva carrera, servicio o evento, simplemente edita el archivo `js/data.js`:

```javascript
carreras: [
  {
    id: "nueva-carrera",
    nombre: "Nombre de la Carrera",
    descripcion: "Descripción...",
    icono: "🎯",
    imagen: "url-de-imagen",
    duracion: "3 años",
    modalidad: "Presencial",
    titulo: "Profesional Técnico en..."
  }
]
```

El sitio automáticamente renderizará la nueva información en todas las secciones relevantes.

## Páginas Internas

Las páginas internas usan un header y footer consistentes. El footer se genera dinámicamente con `js/footer.js`.

## Despliegue

El sitio es 100% estático, puede desplegarse en:
- Netlify
- Vercel
- GitHub Pages
- Cualquier servidor web estático

## Licencia

ISC
