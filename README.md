# Memoirs — Cuaderno Digital

Landing page de producto para **Memoirs**, un cuaderno digital.

## Stack

- **React 19** + **Vite 8** (rolldown)
- **CSS puro** con *design tokens* (`:root` en `src/index.css`), un archivo por componente
- **oxlint** como linter
- Sin router, sin backend, sin TypeScript

## Requisitos

- Node.js 20+

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (HMR)
npm run lint     # pasar oxlint
npm run build    # build de producción en dist/
npm run preview  # servir dist/ en local
```

## Estructura

```
src/
├── main.jsx                  punto de entrada
├── App.jsx                   ensambla las secciones
├── index.css                 design tokens + reset + .app
├── componentes/
│   ├── Encabezado.jsx/.css   cabecera fija y navegación
│   ├── piePagina.jsx/.css    pie de página
│   └── SeccionAcceso.jsx/.css formulario de acceso
└── paginas/
    ├── seccionesBase.css     estilos compartidos de sección
    ├── SeccionHero.jsx/.css
    ├── SeccionFuncionalidades.jsx/.css
    ├── SeccionCasosUso.jsx/.css
    ├── SeccionTestimonios.jsx/.css
    └── SeccionCTA.jsx/.css
```

## Anclas de navegación

Cada sección declara un `id` que el `Encabezado` usa como destino:

| Sección | id |
|---|---|
| Hero | `#inicio` |
| Funcionalidades | `#funciones` |
| Casos de uso | `#casos` |
| Testimonios | `#testimonios` |
| Formulario de acceso | `#acceso` |
| Llamada a la acción | `#cuaderno` |

## Pendiente

- Enlaces del pie de página (`plantillas`, `precios`, `ayuda`, `contacto`, `privacidad`, `términos`, `blog`, redes sociales) apuntan a páginas que aún no existen.
- `¿Olvidaste tu clave?` necesita un flujo real de recuperación.
- El formulario de acceso no tiene lógica: `onSubmit` solo llama a `preventDefault()`.
- `src/paginas/inicio.jsx`, `src/paginas/inicio.css` y `src/App.css` son código sin usar.
