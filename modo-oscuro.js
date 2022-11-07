// El primer paso, fue obtener todos los elementos HTML que:
// 1. Iban a ser manipulados por el usuario. Ejemplo: Clicks sobre un boton
// 2. Iban a ser cambiados dinamicamente por la manipulacion de otro elemento.Ejemplo:
// Cuando el usuario toca un boton, el texto "Claro" pasa a ser "Oscuro" y viceversa.

// Get = Obtener, Element = Elemento, By ID = Por ID
var body = document.getElementById("root")
var spanModoNuevo = document.getElementById("color-esquema")
var buttonCambiarModo = document.getElementById("cambiar-modo")


// El segundo paso, fue definir el modo actual que al final, es ademas,
// el nombre de la clase en CSS que tiene los colores que queremos dependiendo
// del modo que el usuario ha elegido. Los cuales pueden ser: "light" o "dark".
var modoActual = "light"


// El tercer paso, fue definir el texto que indica cual sera el nuevo color de esquema
// que utilizara la pagina. Inicialmente sabemos que sera "light" pero, esos nombres
// corresponden y deben ser iguales a los nombres de las clases en CSS. Entonces,
// esta funcion retorna el texto LEGIBLE POR HUMANOS que sera el texto interno 
// del <span id="color-esquema"></span> que definimos en index.html
function obtenerModoNuevo() {
    if (modoActual === "dark") {
        return "Claro"
    } else {
        return "Oscuro"
    }
}


// El cuarto paso, fue establecer el texto INICIAL para el <span id="color-esquema"></span>
// el cual va a ser establecido justo cuando corre el script POR PRIMERA VEZ.

// Inner = Interno, Text = Texto....  Texto interno
spanModoNuevo.innerText = obtenerModoNuevo()

// El quinto paso, definimos como cambiar el modo dinamicamente... Evaluando el modo actual
// ya que si el modo actual es "Claro" queremos cambiar al "Oscuro".
function cambiarModo() {
    if (modoActual === "dark") {
        // Class = Clase, List = Lista.... Lista de clases (Hablando de CSS)
        // Remove = Remover
        body.classList.remove(modoActual)
        modoActual = "light"
    } else {
        modoActual = "dark"
        // Add = Agregar
        body.classList.add(modoActual)
    }

    spanModoNuevo.innerHTML = obtenerModoNuevo()
}

// Por ultimo, definimos un escuchador de evento CLICK sobre el <button id="cambiar-modo"></button> 
// de tal manera que, cuando el usuario haga click en el boton. El usuario sea el ejecutor
// de la funcion "cambiarModo" ya que nosotros no estaremos presentes en ese momento (callback)

// Add = Agregar, Event = Evento, Listener = Escuchador.... Agregar escuchador de evento
buttonCambiarModo.addEventListener("click", cambiarModo)
