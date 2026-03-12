export function guardar(clave, tarea) {
    localStorage.setItem(clave, tarea);
}

export function recuperar(clave) {
    return localStorage.getItem(clave);
}

export function limpiarTodo(clave) {
    localStorage.clear(clave);
    return alert = "Lista eliminada";
}
