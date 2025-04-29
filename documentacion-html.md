# Documentación de Archivos HTML - Sitio Web Unreal Engine 5

Este documento proporciona una descripción detallada de todos los archivos HTML que componen el sitio web informativo sobre Unreal Engine 5.

## 1. index.html

**Propósito**: Página principal del sitio web que sirve como punto de entrada y ofrece una visión general de Unreal Engine 5.

**Estructura**:
- **Metadatos y configuración**: Incluye configuración básica del documento, codificación UTF-8, viewport para dispositivos móviles, enlaces a hojas de estilo (style.css y Font Awesome), script JavaScript y fuentes de Google (Montserrat y Roboto).
- **Barra de navegación**: Contiene el logo de Unreal Engine, enlaces a las diferentes secciones del sitio y un botón para cambiar el tema (claro/oscuro).
- **Encabezado principal (hero)**: Sección destacada con título principal y un botón de llamada a la acción.
- **Contenido principal**: Organizado en secciones:
  - Características
  - Ventajas y Desventajas
  - Requisitos
  - Juegos
  - Compra
  - Trailers
- **Pie de página**: Información de copyright y descargo de responsabilidad.

**Relación con otros archivos**: Actúa como hub central, enlazando a todas las páginas detalladas del sitio mediante la barra de navegación.

## 2. caracteristicas-principales.html

**Propósito**: Página dedicada a explicar en detalle las características principales de Unreal Engine 5.

**Estructura**:
- **Metadatos y configuración**: Similar a index.html, con título específico para esta página.
- **Barra de navegación**: Mantiene la consistencia con el resto del sitio, pero los enlaces apuntan a secciones de index.html.
- **Contenido principal**: Información detallada sobre las características de Unreal Engine 5, probablemente incluyendo:
  - Nanite (sistema de geometría virtualizada)
  - Lumen (sistema de iluminación global dinámica)
  - MetaHuman Creator
  - World Partition
  - Otras características técnicas
- **Pie de página**: Consistente con el resto del sitio.

**Relación con otros archivos**: Se accede desde la sección "Características" de index.html y mantiene enlaces de navegación al resto de páginas.

## 3. ventajas-desventajas.html

**Propósito**: Página que analiza las ventajas y desventajas de utilizar Unreal Engine 5 para el desarrollo de videojuegos y otras aplicaciones.

**Estructura**:
- **Metadatos y configuración**: Similar a otras páginas, con título específico.
- **Barra de navegación**: Consistente con el resto del sitio.
- **Contenido principal**: Dividido en dos secciones principales:
  - Ventajas: Beneficios de utilizar Unreal Engine 5 (rendimiento, calidad visual, facilidad de uso, etc.)
  - Desventajas: Limitaciones o consideraciones a tener en cuenta (curva de aprendizaje, requisitos de hardware, etc.)
- **Pie de página**: Consistente con el resto del sitio.

**Relación con otros archivos**: Se accede desde la sección "Ventajas y Desventajas" de index.html y mantiene enlaces al resto de páginas.

## 4. requisitos-sistema.html

**Propósito**: Página que detalla los requisitos de sistema necesarios para ejecutar Unreal Engine 5, tanto para desarrollo como para juegos finales.

**Estructura**:
- **Metadatos y configuración**: Similar a otras páginas, con título específico.
- **Barra de navegación**: Consistente con el resto del sitio.
- **Contenido principal**: Información detallada sobre requisitos de hardware y software:
  - Requisitos mínimos
  - Requisitos recomendados
  - Requisitos para características específicas (como Nanite o Lumen)
  - Compatibilidad con sistemas operativos
  - Requisitos de almacenamiento
- **Pie de página**: Consistente con el resto del sitio.

**Relación con otros archivos**: Se accede desde la sección "Requisitos" de index.html y mantiene enlaces al resto de páginas.

## 5. juegos-unreal.html

**Propósito**: Página que muestra una galería de juegos desarrollados con Unreal Engine 5, destacando la versatilidad y capacidades del motor.

**Estructura**:
- **Metadatos y configuración**: Similar a otras páginas, con título específico.
- **Barra de navegación**: Consistente con el resto del sitio.
- **Contenido principal**: Galería de juegos con:
  - Imágenes/capturas de pantalla
  - Títulos de los juegos
  - Breves descripciones
  - Enlaces a más detalles (posiblemente a detalles-juego.html)
  - Posiblemente categorización por géneros o plataformas
- **Pie de página**: Consistente con el resto del sitio.

**Relación con otros archivos**: Se accede desde la sección "Juegos" de index.html, enlaza a detalles-juego.html para información específica de cada juego.

## 6. detalles-juego.html

**Propósito**: Plantilla para mostrar información detallada sobre un juego específico desarrollado con Unreal Engine 5.

**Estructura**:
- **Metadatos y configuración**: Similar a otras páginas, con título genérico que probablemente se personaliza dinámicamente.
- **Barra de navegación**: Consistente con el resto del sitio.
- **Contenido principal**: Información detallada sobre un juego específico:
  - Imágenes de alta calidad o galería
  - Título y desarrollador
  - Descripción detallada
  - Características técnicas
  - Requisitos específicos
  - Fecha de lanzamiento
  - Enlaces a sitio oficial o tiendas
  - Posiblemente videos o trailers embebidos
- **Pie de página**: Consistente con el resto del sitio.

**Relación con otros archivos**: Se accede desde juegos-unreal.html al hacer clic en un juego específico.

## 7. mas-trailers.html

**Propósito**: Página dedicada a mostrar una colección de trailers y videos de juegos desarrollados con Unreal Engine 5.

**Estructura**:
- **Metadatos y configuración**: Similar a otras páginas, con título específico.
- **Barra de navegación**: Consistente con el resto del sitio.
- **Contenido principal**: Colección de videos embebidos:
  - Trailers oficiales de juegos
  - Demostraciones técnicas
  - Posiblemente videos de desarrolladores o tutoriales
  - Organización por categorías o cronológicamente
- **Pie de página**: Consistente con el resto del sitio.

**Relación con otros archivos**: Se accede desde la sección "Trailers" de index.html o posiblemente desde páginas de juegos específicos.

## Estructura Común en Todos los Archivos HTML

Todos los archivos HTML del sitio comparten estos elementos comunes:

1. **Doctype y configuración básica**: Todos utilizan HTML5 con configuración para idioma español.
2. **Metadatos**: Incluyen charset UTF-8 y configuración de viewport para responsividad.
3. **Recursos externos**:
   - Hoja de estilos principal (style.css)
   - Font Awesome para iconos
   - Script JavaScript (script.js) con atributo defer
   - Fuentes Google (Montserrat y Roboto)
4. **Estructura de navegación**: Barra de navegación consistente que permite moverse entre todas las páginas.
5. **Semántica HTML5**: Uso de etiquetas semánticas como nav, header, section, footer.
6. **Diseño responsivo**: Adaptado para diferentes tamaños de pantalla.
7. **Tema claro/oscuro**: Funcionalidad para cambiar entre temas.

Esta estructura común garantiza una experiencia de usuario coherente y facilita el mantenimiento del sitio web.