# Canaco

Blog de noticias desarrollado con Django. La interfaz usa una plantilla propia
construida con Bootstrap 5 y una paleta morado + coral.

## Requisitos

- Python 3.13 — <https://www.python.org/downloads/>
- XAMPP 8.1.25 (servicio MySQL) — <https://www.apachefriends.org/es/index.html>
- Visual Studio Code

## Instalación

1. Crear y activar el entorno virtual:

   ```bash
   py -m venv canaco_env
   .\canaco_env\Scripts\activate
   ```

2. Instalar las dependencias y verificarlas:

   ```bash
   pip install -r requirements.txt
   pip list
   ```

3. Levantar el servidor en el puerto **8001** y abrir <http://127.0.0.1:8001>:

   ```bash
   python manage.py runserver 8001
   ```

   Se usa el puerto 8001 porque en el mismo equipo corre otro proyecto Django
   (`canaco_salvador`) en el puerto 8000. Un puerto solo puede usarlo un servidor
   a la vez; si se levantan los dos en el 8000, el segundo muestra el error
   `That port is already in use`. Con puertos distintos ambos pueden estar
   encendidos al mismo tiempo:

   | Proyecto | Comando | Dirección |
   | --- | --- | --- |
   | `canaco_salvador` | `python manage.py runserver` | <http://127.0.0.1:8000> |
   | `canaco_maria` | `python manage.py runserver 8001` | <http://127.0.0.1:8001> |

   Para detener el servidor se presiona **Ctrl + C** en su terminal.

## Estructura

- `canaco/`: configuración del proyecto (`settings.py`, `urls.py`).
- `home/`: aplicación principal (vistas, rutas, modelos y templates).
- `static/`: hojas de estilo, scripts e imágenes.

## Diseño

| Elemento | Valor |
| --- | --- |
| Framework | Bootstrap 5.3 + Bootstrap Icons (CDN) |
| Tipografías | Playfair Display (títulos) y Poppins (texto) |
| Morado | `#4c1d95` (principal), `#2e1065` (oscuro) |
| Coral | `#f97360` (acento), `#e85a45` (hover) |
| Hoja de estilos | `static/css/style.css` |

Las páginas públicas extienden `partials/base.html` y las del panel de
administración extienden `partials/sidebar_base.html`; ambas incluyen
`partials/header.html` y `partials/footer.html`.

## Base de datos

1. En XAMPP iniciar **Apache** y **MySQL** y crear en phpMyAdmin la base `canaco`.
2. La conexión está en `canaco/settings.py` (usuario `root`, sin contraseña).
   Se usa **PyMySQL**, registrado en `canaco/__init__.py` con `pymysql.install_as_MySQLdb()`.
3. Ejecutar las migraciones y crear un superusuario:

   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```

Modelos de la app `home`: `Categoria`, `Archivo`, `Perfil`, `Publicacion`,
`GaleriaPublicacion` y `Comentario`.

## Funcionalidades

- **Cuentas:** registro, inicio y cierre de sesión, perfil con foto y cambio de contraseña.
  Cada usuario nuevo recibe un `Perfil` automáticamente (`home/signals.py`).
- **Usuarios:** crear, editar, bloquear y eliminar cuentas, con rol asignable.
- **Noticias:** crear, editar, publicar u ocultar y eliminar publicaciones, con portada,
  galería de imágenes y editor Quill.
- **Categorías:** alta, edición y eliminación; filtro de noticias por categoría.
- **Comentarios:** los usuarios comentan y un operador los aprueba, bloquea o elimina.
- **Inicio:** carrusel y noticias recientes publicadas.
- **Contexto global:** `home/context_processors.py` expone `global_categorias` y
  `global_recientes` para el menú de categorías y el pie de página.

## Roles

- **Administrador / editor** (`is_staff`): acceso al panel de noticias, comentarios,
  categorías y usuarios.
- **Colaborador:** puede ver su perfil, cambiar su contraseña y comentar noticias.
