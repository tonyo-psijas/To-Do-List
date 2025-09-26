const tareaInput = document.getElementById("ingresarTarea")
const btnAgregar = document.getElementById("btnAgregar")
const listaTareas = document.querySelector("tbody")

const cuentaTareas = document.getElementById("tareasTotal")
const cuentaTareasRealizadas = document.getElementById("tareasRealizadas")

const tareas = [
    { id: 1, nombre: "Lavar la loza", estado: false },
    { id: 2, nombre: "Podar el pasto", estado: false },
    { id: 3, nombre: "Compras de supermercado", estado: false }
]


function renderList(tareas) {
    listaTareas.innerHTML = ""

    tareas.forEach((tarea, index) => {
        tarea.id = index + 1
    })

    tareas.forEach((tarea) => {
        const nombreTarea = document.querySelector(".nombre-tarea")
        listaTareas.innerHTML += `
            <tr>
                <td>${tarea.id}</td>
                <td style="text-decoration: ${tarea.estado == true ? 'line-through' : 'none'}">${tarea.nombre}</td>
                <td>
                    <input type="checkbox" ${tarea.estado == true ? 'checked' : ''} onchange="modificarEstado(${tarea.id})">
                </td>
                <td><button class="eliminar" onclick="borrar(${tarea.id})"><i class="fa-light fa-trash-xmark"></i> Eliminar</button></td>
            </tr>`;
        cuentaTareas.innerHTML = tareas.length
        cuentaTareasRealizadas.innerHTML = tareas.filter(tarea => tarea.estado === true).length
    })
}

btnAgregar.addEventListener("click", () => {
    const nuevaTarea = tareaInput.value
    tareas.push({id: null, nombre: nuevaTarea, estado: false})
    tareaInput.value = ""
    renderList(tareas)
})

function borrar(id){
    let tareaIndex = tareas.findIndex((tarea) => tarea.id === id)
    tareas.splice(tareaIndex, 1)
    renderList(tareas)
}

function modificarEstado(id) {
    let tareaIndex = tareas.findIndex((tarea) => tarea.id === id)

    if(tareas[tareaIndex].estado === true){
        tareas[tareaIndex].estado = false
    }
    else{
        tareas[tareaIndex].estado = true
    }
    renderList(tareas)
}

renderList(tareas)