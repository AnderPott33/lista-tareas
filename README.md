# Lista de Tareas (To‑Do List)

## Descripción

Aplicación web simple para gestionar una lista de tareas.\
Permite agregar, eliminar y limpiar tareas. Las tareas se almacenan en
el **LocalStorage del navegador**, por lo que permanecen guardadas
incluso si se recarga la página.

La aplicación funciona completamente en el **frontend**, sin necesidad
de servidor ni base de datos.

------------------------------------------------------------------------

## Tecnologías utilizadas

-   **HTML5**
-   **JavaScript (ES6 Modules)**
-   **Tailwind CSS**
-   **Font Awesome**
-   **LocalStorage API (navegador)**

------------------------------------------------------------------------

## Estructura del proyecto

    project/
    │
    ├── index.html
    │
    └── js/
        ├── app.js
        └── auxiliar.js

### index.html

Contiene la interfaz del usuario:

-   Campo de texto para escribir la tarea
-   Botón para agregar tareas
-   Lista donde se muestran las tareas
-   Botón para eliminar todas las tareas

También incluye: - TailwindCSS para estilos - FontAwesome para iconos -
Importación del script principal (`app.js`).

------------------------------------------------------------------------

### app.js

Contiene la lógica principal de la aplicación.

Funciones principales:

-   Agregar tareas
-   Mostrar tareas guardadas
-   Eliminar tareas individuales
-   Limpiar toda la lista
-   Sincronizar datos con LocalStorage

También utiliza **delegación de eventos** para manejar botones de
eliminación creados dinámicamente.

------------------------------------------------------------------------

#### Confirmación con SweetAlert2

Al hacer clic en "Limpiar Todo":
- Se muestra un diálogo modal preguntando si se desea eliminar todas las tareas.
- Confirmar → borra todas las tareas y muestra mensaje de éxito.
- Denegar → muestra mensaje informativo sin borrar.
- Cancelar → cierra el modal sin acción.

Esto evita borrados accidentales.

------------------------------------------------------------------------

### auxiliar.js

Contiene funciones reutilizables para manejar el almacenamiento local.

Funciones:

**guardar(clave, valor)** Guarda información en LocalStorage.

**recuperar(clave)** Recupera información almacenada.

**limpiarTodo()** Elimina los datos almacenados.

------------------------------------------------------------------------

## Funcionamiento del sistema

1.  El usuario escribe una tarea.
2.  Presiona **Agregar**.
3.  La tarea se:
    -   muestra en la lista
    -   guarda en LocalStorage
4.  Al recargar la página:
    -   se recuperan las tareas guardadas
    -   se muestran nuevamente.

------------------------------------------------------------------------

## Funcionalidades

-   Agregar tareas
-   Visualizar tareas guardadas
-   Eliminar una tarea específica
-   Limpiar toda la lista
-   Persistencia de datos en el navegador

------------------------------------------------------------------------

## Posibles mejoras

-   Validación para evitar tareas vacías
-   Marcar tareas como completadas
-   Agregar fecha o prioridad
-   Guardar tareas con IDs únicos
-   Editar tareas existentes
-   Animaciones o mejoras visuales

------------------------------------------------------------------------

## Autor

Proyecto de práctica para aprender: - JavaScript - Manejo del DOM -
LocalStorage - Modularización de código
# lista-tareas
