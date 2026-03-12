import { guardar, recuperar, limpiarTodo } from "./auxiliar.js";

const btnGuardar = document.querySelector("#btn-guardar");
const nuevaTarea = document.querySelector("#nueva-tarea");
const listadoTareas = document.querySelector("#listado-tareas");
const btnEliminar = document.querySelectorAll("[data-name='btnEliminar']");
const btnEliminarTodo = document.querySelector("#btnEliminarTodo");


let historicoTareas = JSON.parse(recuperar("tareas")) ?? [];


/* function guardarTarea() {
    var textTarea = nuevaTarea.value;
    var nuevaLinea =
    `
    <li class="flex justify-between mt-2 bg-gray-100 p-2 rounded">
    <span class="font-mono text-inherit">${textTarea}</span>
    <button class="bg-red-500 hover:bg-red-700 text-white px-2 rounded"><i class="fa-solid fa-trash"></i></button>
    </li>
    `;
    listadoTareas.insertAdjacentHTML("afterend", nuevaLinea);
    };
    
    btnGuardar.addEventListener('click', function() {
        guardarTarea();
        }); */

btnGuardar.addEventListener('click', function () {
    const textTarea = nuevaTarea.value;
    historicoTareas.push(textTarea);
    const nuevaLinea =
        `
            <li class="flex justify-between mb-2 bg-gray-100 p-2 rounded">
            <span class="font-mono text-inherit">${textTarea}</span>
            <button data-name="btnEliminar" class="bg-red-500 hover:bg-red-700 text-white px-2 rounded"><i
            class="fa-solid fa-trash"></i></button>
            </li>
            `;
    listadoTareas.insertAdjacentHTML("beforeend", nuevaLinea);
    nuevaTarea.value = "";

    guardar("tareas", JSON.stringify(historicoTareas));
});

function recuperarTodo() {
    const mostrar = historicoTareas.map(
        function (e) {
            return `
            <li class="flex justify-between bg-gray-100 p-2 rounded">
            <span class="font-mono text-inherit">${e}</span>
            <button data-name="btnEliminar" class="bg-red-500 hover:bg-red-700 text-white px-2 rounded"><i
            class="fa-solid fa-trash"></i></button>
            </li>
            `
        }
    )
    listadoTareas.insertAdjacentHTML("beforeend", mostrar.join(""));
}

recuperarTodo();

btnEliminarTodo.addEventListener("click", () => {
    Swal.fire({
        title: "Desea eliminar todas las tareas?",
        theme: "dark",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Borrar",
        denyButtonText: `No borrar`
    }).then((respuesta) => {
        const [titulo, icono] = respuesta.isConfirmed
            ? ["Tareas eliminadas", "success"]
            : respuesta.isDenied
                ? ["Tareas no eliminadas", "info"]
                : [null, null];

        if (titulo) {
            if (respuesta.isConfirmed) listadoTareas.innerHTML = ``;
            if (respuesta.isConfirmed) limpiarTodo(historicoTareas);

            Swal.fire({
                title: titulo,
                theme: "dark",
                icon: icono,
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
});

listadoTareas.addEventListener("click", function (e) {
    if (e.target.closest("[data-name='btnEliminar']")) {
        const texto = e.target.closest("li").querySelector("span").textContent;
        e.target.closest("li").remove();
        historicoTareas = historicoTareas.filter(
            function (tarea) {
                return tarea != texto
            }
        );
        /* limpiarTodo(historicoTareas); */
        guardar("tareas", JSON.stringify(historicoTareas));

    }
});