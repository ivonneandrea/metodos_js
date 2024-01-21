
let tareas =[
    {id: 16, descripcion: "Ir al mercado", completetado: false},
    {id: 60, descripcion: "Estudiar para la prueba",completado:false },
    {id: 24, descripcion: "Sacar a pasear a Tobby", completado: false}
];

function actualizarLista() {
    const listaTareas = document.getElementById("tareas");
    const totalTareasSpan = document.getElementById("totalTareas");
    const totalTareasRealizadasSpan = document.getElementById ("totalTareasRealizadas");


listaTareas.innerHTML = "";
totalTareasSpan.textContent = tareas.length;

let totalTareasRealizadas = 0;

tareas.forEach ((tarea,index) => {
const li = document.createElement("li");
li.textContent= `ID: ${tarea.id} ${tarea.descripcion}`;

const completadoCheckbox = document.createElement ("input");
completadoCheckbox.type = "checkbox";
completadoCheckbox.checked = tarea.completado;
completadoCheckbox.addEventListener("change", () => marcarComoCompletada (index));
li.appendChild(completadoCheckbox);

const borrarBoton = document.createElement("button");
borrarBoton.textContent = "X"; 
borrarBoton.addEventListener("click", () => borrarTarea(index));
li.appendChild(borrarBoton);

borrarBoton.classList.add ("boton-rojo");

if (tarea.completado) {
li.classList.add ("completed");
totalTareasRealizadas++;
}

listaTareas.appendChild(li);
});

totalTareasRealizadasSpan.textContent = totalTareasRealizadas;
}

function agregarTarea() {
    const tareaInput = document.getElementById("nuevaTarea");
    const nuevaTarea = {
      id: Date.now(), 
      descripcion: tareaInput.value,
      completado: false
    };

    tareas.push(nuevaTarea);
    tareaInput.value = "";
    actualizarLista();
  }

  function borrarTarea(index) {
    tareas.splice(index, 1);
    actualizarLista();
  }

  function marcarComoCompletada(index) {
    tareas[index].completado = !tareas[index].completado;
    actualizarLista();
  }

  actualizarLista();