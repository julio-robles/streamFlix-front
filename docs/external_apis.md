<!-- markdown table of external endpoints -->

# Endpoints Externos Utilizados

| Método | Ruta                                 | Descripción                      | Parámetros                    |
|--------|--------------------------------------|----------------------------------|-------------------------------|
| GET    | /movie/{movie_id}                    | Obtener detalles de una película | `movie_id`, `api_key`        |
| GET    | /search/movie                        | Buscar películas por título      | `query`, `page`, `api_key`   |
| GET    | https://image.tmdb.org/t/p/w500/...  | Obtener imagen de una película   | `poster_path` (de respuesta) |

---

## Ejemplos cURL

### 🎬 Detalles de película

```bash
curl "https://api.themoviedb.org/3/movie/550?api_key=TU_API_KEY"
```

### 🔍 Buscar películas

```bash
curl "https://api.themoviedb.org/3/search/movie?query=Inception&api_key=TU_API_KEY"
```

### 🖼️ Obtener imagen

```bash
https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg
```

> Reemplaza `TU_API_KEY` por tu clave personal de TMDb.