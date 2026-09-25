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

3. Levantar el servidor y abrir <http://127.0.0.1:8000>:

   ```bash
   python manage.py runserver
   ```

## Estructura

- `canaco/`: configuración del proyecto (`settings.py`, `urls.py`).
- `home/`: aplicación principal (vistas, rutas, modelos y templates).
