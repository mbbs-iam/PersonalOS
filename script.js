const btnMissions = document.getElementById("btn-missions");
const ventanaMisiones = document.getElementById("ventana-misiones"); 
const btnCerrarMisiones = document.getElementById("btn-cerrar-misiones");
const btnAddTarea = document.getElementById("btn-add-tarea");
const inputTarea = document.getElementById("input-tarea");
const listaMisiones = document.getElementById("lista-misiones");

btnMissions.addEventListener("click", () => {
    ventanaMisiones.style.display = "block";
});

btnCerrarMisiones.addEventListener("click", () => {
    ventanaMisiones.style.display = "none";
});

btnAddTarea.addEventListener("click", () => {
    const textoMision = inputTarea.value.trim(); 

    if (textoMision === ""){
        alert("The cops, the cops..");
        return;
    }

    crearElementoMision(textoMision);

    inputTarea.value = "";
});

function crearElementoMision(texto) {
    const li = document.createElement("li");
    
    // 1. Creamos el texto
    const textoSpan = document.createElement("span");
    textoSpan.innerText = texto;
    textoSpan.style.cursor = "pointer";

    textoSpan.addEventListener("click", () => {
        textoSpan.classList.toggle("tarea-completada");
    });

    // 2. ¡CORRECCIÓN AQUÍ!: Creamos el botón antes de usarlo
    const btnBorrar = document.createElement("button");
    btnBorrar.innerText = "🗑️";
    btnBorrar.style.background = "none";
    btnBorrar.style.border = "none";
    btnBorrar.style.cursor = "pointer";

    btnBorrar.addEventListener("click", () => {
        li.remove();
    });

    // 3. Empaquetamos todo dentro del 'li'
    li.appendChild(textoSpan);
    li.appendChild(btnBorrar);

    // 4. Lo añadimos a la lista visible
    listaMisiones.appendChild(li);
}