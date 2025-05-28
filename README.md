# StreamFlix Frontend

StreamFlix es una aplicación de streaming que permite a los usuarios explorar, buscar y gestionar películas. Este proyecto corresponde al frontend de la aplicación, desarrollado con React, TypeScript y Tailwind CSS.

## Instrucciones de Configuración y Ejecución

### Requisitos Previos
- Node.js (v16 o superior)
- npm o yarn

### Instalación
1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd streamFlix-front
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

### Ejecución en Desarrollo
Inicia el servidor de desarrollo:
```bash
npm run dev
```

### Construcción para Producción
Genera los archivos optimizados para producción:
```bash
npm run build
```

### Pruebas
Ejecuta los tests:
```bash
npm test
```

## Componentes Principales

### Página de Inicio
- **Carrusel destacado** con películas populares.
- **Secciones de contenido** por categorías/géneros.
- **Barra de búsqueda** para encontrar películas.
- **Navegación principal** para acceder a diferentes secciones.

### Autenticación
- **Formulario de inicio de sesión**.
- **Formulario de registro**.
- **Recuperación de contraseña**.
- **Gestión de sesión** con persistencia de token JWT.

### Catálogo de Películas
- **Vista de cuadrícula** con tarjetas de películas.
- **Paginación o scroll infinito**.
- **Filtros** por género, año, clasificación.
- **Ordenación** por diferentes criterios.

### Detalle de Película
- **Información completa** de la película.
- **Sección de valoraciones y comentarios**.
- **Formulario para añadir valoración**.
- **Información relacionada** (películas similares).

### Perfil de Usuario
- **Visualización de datos personales**.
- **Edición de perfil**.
- **Historial de valoraciones**.
- **Cambio de contraseña**.

### Panel de Administración (si el usuario tiene rol de administrador)
- **Gestión de películas** (CRUD).
- **Gestión de usuarios**.
- **Estadísticas básicas**.

## Funcionalidades Requeridas

### Navegación y Experiencia de Usuario
- Implementar enrutamiento con React Router.
- Crear layouts responsivos para diferentes dispositivos.
- Diseñar transiciones y animaciones para mejorar la experiencia.
- Implementar modo oscuro/claro.

### Gestión de Estado
- Utilizar hooks de React para gestión de estado local.
- Implementar Context API o Redux para estado global.
- Gestionar estado de autenticación y permisos.
- Manejar estados de carga y errores.

### Integración con API
- Configurar cliente HTTP (Axios/Fetch) para comunicación con backend.
- Implementar interceptores para gestión de tokens.
- Crear servicios reutilizables para cada entidad.
- Manejar respuestas y errores de forma consistente.

### Formularios y Validación
- Crear formularios con validación del lado del cliente.
- Implementar feedback visual para errores de validación.
- Gestionar estados de envío y respuesta.
- Crear componentes de formulario reutilizables.

### Optimización y Rendimiento
- Implementar lazy loading de componentes.
- Utilizar memoización donde sea apropiado.
- Optimizar renderizado con React.memo, useMemo, useCallback.
- Implementar estrategias para evitar re-renderizados innecesarios.

## Requisitos Técnicos

### Estructura y Organización
- Utilizar componentes funcionales y hooks.
- Organizar código por características o dominios.
- Separar lógica de presentación y de negocio.
- Implementar patrones de diseño recomendados (Custom Hooks, HOC, etc.).

### Estilizado
- Utilizar Tailwind CSS para estilos.
- Crear componentes de UI reutilizables.
- Implementar diseño responsivo.
- Asegurar accesibilidad (WCAG).

### Testing
- Configurar Jest y React Testing Library.
- Escribir tests para componentes principales.
- Implementar tests de integración para flujos críticos.
- Crear mocks para servicios y APIs.
