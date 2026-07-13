
// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  var welcomeScreen =
document.querySelector("#welcome")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element){
  element.style.display = "flex"
}
var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", 
  function(){
    closeWindow(welcomeScreen);
  }
);

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

function updateTime() {
        var currentTime = new Date().toLocaleSString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime
      }

setInterval(updateTime, 1000);
}

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
