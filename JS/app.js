/* -------------------------------- Llamados al DOM ------------------------------- */
const elements = {
  sectionKaomoji: document.querySelector(".kaomoji"),
  sectionMensaje: document.querySelector(".mensaje"),
  sectionBotones: document.querySelector(".botones"),
  btn1: document.querySelector("#divBtn1"),
  btn2: document.querySelector("#divBtn2"),
  btn3: document.querySelector("#divBtn3"),
  btn4: document.querySelector("#divBtn4"),
  alerta: document.querySelector(".alerta"),
};

/* ------------------------------ Creando botones ----------------------------- */
function crearBoton(innerText, action) {
  const boton = document.createElement("button");
  boton.classList.add("btn");
  boton.innerText = innerText;
  boton.addEventListener("click", action);
  return boton;
}

/* -------------------------------------------------------------------------- */
/*                      Juego y renderizado de pantallas                      */
/* -------------------------------------------------------------------------- */

inicioScreen();

/* --------------------------------- Inicio --------------------------------- */
function inicioScreen() {
  elements.sectionKaomoji.innerHTML = `
  <p>⁂*.<( ⁀▽⁀ )>*⁂</p>
  `;
  elements.sectionMensaje.innerHTML = `
  <p>Holis! ¿Queres jugar?</p>
  `;

  elements.btn1.replaceChildren(crearBoton("Si", ingresarNombreScreen));
  elements.btn4.replaceChildren(crearBoton("No", noJugarScreen));
}
/* -------------------------------- No Jugar -------------------------------- */
function noJugarScreen() {
  elements.sectionKaomoji.innerHTML = `
  <(≧^≦)>;
  `;
  elements.sectionMensaje.innerHTML = `
  <p>Bueno, quizás en otra oportunidad nos conoceremos</p>
  <p>Gracias por tu visita</p>
  <p>Cuando quieras volver ingresa nuevamente a este website</p>
  `;
  elements.btn1.innerHTML = "";
  elements.btn4.innerHTML = "";
}
/* ----------------------- Si Jugar / Nombre Mascotita ---------------------- */
function ingresarNombreScreen() {
  elements.sectionKaomoji.innerHTML = `
  <p>(->>￣▽￣)->></p>
  `;
  elements.sectionMensaje.innerHTML = `
    <div id="ingresarNombreMascotita">
    <p>¿Cómo quieres que se llame tu mascotita?</p>
        <input type="text" class="inputs" id="inputNombre" placeholder="Ingresa el nombre aquí" required>
    </div>
    `;
  elements.btn2.innerHTML = "";
  elements.btn3.innerHTML = "";
  elements.btn1.replaceChildren(crearBoton("Listo", validarNombre));
  elements.btn4.replaceChildren(crearBoton("Volver", inicioScreen));
}
function validarNombre() {
  const inputNombre = document.querySelector("#inputNombre");
  const nombreMascotita = inputNombre.value;
  if (!nombreMascotita || nombreMascotita.length < 3) {
    elements.alerta.classList.remove("hidden");
    elements.alerta.innerHTML = `
    <p>Por favor ingresa al menos 3 letras</p>
    `;
    setTimeout(() => {
      elements.alerta.classList.add("hidden");
    }, 2000);
  } else {
    saludarScreen(nombreMascotita);
    elements.btn4.replaceChildren(crearBoton("Volver", ingresarNombreScreen));
  }
}
/* -------------------------- Inicia vida Mascotita ------------------------- */
function saludarScreen(nombre) {
  console.log(nombre);
  mascotita.nombre = nombre;

  if (elements.sectionKaomoji.hasChildNodes()) {
    elements.sectionKaomoji.innerHTML = `
    <p>(つ≧▽≦)つ	</p>
    `;
  }
  elements.sectionMensaje.innerHTML = `
  <p>Holis! Soy ${nombre}! <br>gracias por jugar conmigo</p>
  `;
  elements.alerta.innerHTML = "";
  elements.btn1.replaceChildren(crearBoton("Alimentar", alimentarScreen));
  elements.btn2.replaceChildren(crearBoton("Ejercitar", ejercitarScreen));
  elements.btn3.replaceChildren(crearBoton("Jugar", jugarScreen));
  elements.btn4.replaceChildren(crearBoton("Volver", ingresarNombreScreen));
  vivir();
}

/* -------------------------------- Mascotita ------------------------------- */
const mascotita = {
  nombre: "",
  edad: 0,
  estado: "",
  kaomoji: "",
  energia: 100,
  hambre: 0,
  aburrimiento: 0,
};

/* ---------------------------------- Vivir --------------------------------- */

function vivir() {
  console.log("Estoy viviendo");
  // const viviendo = setInterval(() => {
  //   mascotita.edad++;
  //   mascotita.energia--;
  //   mascotita.hambre++;
  //   mascotita.aburrimiento++;
  //   console.log("Estoy viviendo");
  //   if (mascotita.edad == 10 || mascotita.energia == 0) {
  //     clearInterval(viviendo);
  //   }
  // }, 1000);
}

/* --------------------- Interacciones con la mascotita --------------------- */
function alimentarScreen() {
  console.log("Me alimentaste!");
}
function ejercitarScreen() {
  console.log("Hicimos ejercicio!");
}
function jugarScreen() {
  console.log("Qué divertido jugar!");
}
