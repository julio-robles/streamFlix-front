# 🧪 Práctica de Refactorización y Optimización en React

Este ejercicio pone en práctica las técnicas vistas en el Capítulo 9, aplicadas exclusivamente a una aplicación **React**. Se han preparado componentes y servicios con problemas comunes para que puedas refactorizar, optimizar y medir su impacto.

---

## 📁 Archivos disponibles

Todos los ejemplos están incluidos en el repositorio. Estos son los archivos relevantes:

| Archivo | Problema a resolver |
|--------|----------------------|
| `src/services/ExampleLongFunction.ts` | Función larga y difícil de mantener |
| `src/services/MonolithicService.ts` | Servicio con múltiples responsabilidades mezcladas |
| `src/utils/promiseChain.ts` | Cadena `.then()` a convertir a `async/await` |
| `src/components/HeavyList.tsx` | Componente React pesado sin optimización |

---

## 🧩 Actividades por archivo

### 1. Refactorizar función larga

- **Ubicación:** `src/services/ExampleLongFunction.ts`
- Objetivo:
  - Detectar fragmentos repetitivos o largos.
  - Usar Copilot para extraer funciones como `calculateSum`, `normalizeData`, etc.
  - Aplicar principios de SRP y legibilidad.
- Prompt sugerido:
  ```ts
  // extract normalization logic to normalizeData function
  ```

---

### 2. Separar responsabilidades

- **Ubicación:** `src/services/MonolithicService.ts`
- Objetivo:
  - Dividir lógica de email y logging en servicios distintos (`EmailService`, `AuditLogger`).
  - Aplicar el principio de responsabilidad única (SRP).
- Prompt sugerido:
  ```ts
  // extract sendEmail and logAudit to separate services
  ```

---

### 3. Convertir promesas a async/await

- **Ubicación:** `src/utils/promiseChain.ts`
- Objetivo:
  - Convertir el uso de `.then()` y `.catch()` en una función `async`.
  - Manejar errores con `try/catch` y aplicar `await` secuencialmente.
- Prompt sugerido:
  ```ts
  // convert this promise chain to async/await
  ```

---

### 4. Optimizar componente React

- **Ubicación:** `src/components/HeavyList.tsx`
- Problema:
  - Re-renderizados innecesarios.
  - Listado sin memoización ni virtualización.
- Objetivo:
  - Aplicar `useMemo` al filtrado si lo añades.
  - Usar `React.memo` para evitar renders en listas estáticas.
  - Explorar integración de `react-window`.
- Prompt sugerido:
  ```tsx
  // wrap HeavyList in React.memo
  ```

---

## 🧪 Evaluación

- ✅ Refactor aplicado correctamente.
- ✅ Código más legible, segmentado y reutilizable.
- ✅ Uso de herramientas de profiling (console.time, React Profiler).
- ✅ Documentación breve de resultados y mejoras.

---

## 📦 Resultado esperado

Un commit con mensaje:

```
refactor: applied performance optimizations and SRP in services and components
```

Y documentación o comentarios donde se indique:
- Qué se refactorizó.
- Qué mejoras se observaron (opcional: tiempos antes/después).