
dragElement(document.getElementById("welcome"));

function dragElement(element) {
  var initialX = 0, initialY = 0, currentX = 0, currentY = 0;
  
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");

function closeWindow(element) {
  element.style.display = "none";
}
function openWindow(element){
  element.style.display = "flex";
}

welcomeScreenClose.addEventListener("click", function(){
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen);
});

// Reloj del sistema
function updateTime() {
    var currentTime = new Date().toLocaleString(); 
    var timeText = document.querySelector("#timeElement");
    if (timeText) {
        timeText.innerHTML = currentTime;
    }
}
setInterval(updateTime, 1000);

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
        alert("Comandante, asigne una misión válida.");
        return;
    }

    crearElementoMision(textoMision);
    inputTarea.value = "";
});

function crearElementoMision(texto) {
    const li = document.createElement("li");
    
    const textoSpan = document.createElement("span");
    textoSpan.innerText = texto;
    textoSpan.style.cursor = "pointer";

    textoSpan.addEventListener("click", () => {
        textoSpan.classList.toggle("tarea-completada");
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.innerText = "🗑️";
    btnBorrar.style.background = "none";
    btnBorrar.style.border = "none";
    btnBorrar.style.cursor = "pointer";

    btnBorrar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(textoSpan);
    li.appendChild(btnBorrar);
    listaMisiones.appendChild(li);
}

crearElementoMision("🚀 Calibrar sistemas HUD de la NASA");
crearElementoMision("⚽ Planificar jugadas del Mundial 2026 con Lamine Yamal");
