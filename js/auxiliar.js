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


export function miAlert({ titulo = "", tipo = "info", texto = "", tiempo = 2500 } = {}) {

    const notificacion = document.createElement("div");

    let icono = "";
    if(tipo === "success") icono = '<i class="fa-solid fa-check mr-2"></i>';
    else if(tipo === "error") icono = '<i class="fa-solid fa-xmark mr-2"></i>';
    else if(tipo === "info") icono = '<i class="fa-solid fa-circle-info mr-2"></i>';
    else if(tipo === "warning") icono = '<i class="fa-solid fa-triangle-exclamation mr-2"></i>';

    notificacion.innerHTML = `
        <div class="flex items-center">
            ${icono}
            <div>
                <strong class="block font-bold">${titulo}</strong>
                <span>${texto}</span>
            </div>
        </div>
    `;

    notificacion.className = `
        fixed top-5 right-5 text-white px-4 py-3 rounded-lg shadow-lg z-50 flex items-center
    `;

    // color de fondo según tipo
    if(tipo === "success") notificacion.classList.add("bg-green-600");
    else if(tipo === "error") notificacion.classList.add("bg-red-600");
    else if(tipo === "info") notificacion.classList.add("bg-blue-600");
    else notificacion.classList.add("bg-yellow-600");

    document.body.appendChild(notificacion);

    setTimeout(() => notificacion.remove(), tiempo);
}