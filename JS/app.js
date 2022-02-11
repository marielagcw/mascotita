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

/* -------------------------- Llamado funciones ------------------------- */

jugar();

/* --------------------------------- Inicio --------------------------------- */
function jugar() {
  elements.sectionKaomoji.innerHTML = `
  <p>⁂*.<( ⁀▽⁀ )>*⁂</p>
  `;
  elements.sectionMensaje.innerHTML = `
  <p>Holis! ¿Queres jugar?</p>
  `;
  elements.btn1.innerHTML = `
  <button class="btn">Si</button>
  `;
  elements.btn4.innerHTML = `
  <button class="btn">No</button>
  `;
  elements.btn1.addEventListener("click", function crearPantallaNombre(){
    console.log("Evento Pantalla Nombre");
    ingresarNombre();
    elements.btn1.innerHTML = `
    <button class="btn">Listo</button>
    `;
    elements.btn4.innerHTML = `
    <button class="btn">Volver</button>
    `;
    elements.btn1.removeEventListener("click", crearPantallaNombre);
  });
  elements.btn4.addEventListener("click", function crearPantallaNoJugar(){
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
    console.log("Evento Pantalla No Jugar");
    elements.btn4.removeEventListener("click", crearPantallaNoJugar);
  });
}

/* ------------------------- Input Nombre Mascotita ------------------------- */
function ingresarNombre() {
  elements.sectionMensaje.innerHTML = `
    <div id="ingresarNombreMascotita">
    <p>¿Cómo quieres que se llame tu mascotita?</p>
        <input type="text" class="inputs" id="inputNombre" placeholder="Ingresa el nombre aquí" required>
    </div>
    `;
  const inputNombre = document.querySelector("#inputNombre");
  elements.btn1.addEventListener("click", function crearPantallaValidarNombre(){
    const nombreMascotita = inputNombre.value;
    console.log("Evento Pantalla Validar Nombre");
    validarNombre(nombreMascotita);
    elements.btn1.removeEventListener("click", crearPantallaValidarNombre);
  });
  elements.btn2.innerHTML = "";
  elements.btn3.innerHTML = "";
  elements.btn4.addEventListener("click", function crearPantallaInicio(){
    jugar();
    elements.btn4.removeEventListener("click", crearPantallaInicio);
  });
}
/* ---------------------------- Validar input Nombre ---------------------------- */
function validarNombre(nombre) {
  if (!nombre || nombre.length < 3) {
    elements.alerta.classList.remove("hidden");
    elements.alerta.innerHTML = `
    <p>Por favor ingresa al menos 3 letras</p>
    `;
    setTimeout(() => {
      elements.alerta.classList.add("hidden");
    }, 2000);
    console.log("Mi nombre no es válido, ingresalo de nuevo");
    ingresarNombre();
  } else {
    console.log("Holis! Mi nombre fue válido");
    saludar(nombre);
  }
}

/* -------------------------------------------------------------------------- */
/*                            Inicia vida mascotita                           */
/* -------------------------------------------------------------------------- */

function saludar(nombre) {
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
  elements.btn1.innerHTML = `
  <button class="btn">Alimentar<button>
  `;
  elements.btn2.innerHTML = `
  <button class="btn">Ejercitar<button>
  `;
  elements.btn3.innerHTML = `
  <button class="btn">Jugar<button>
  `;
  vivir();
  elements.btn4.addEventListener("click", function crearPantallaVolver(){
    ingresarNombre();
    elements.btn2.innerHTML = "";
    elements.btn3.innerHTML = "";
    elements.btn4.removeEventListener("click", crearPantallaVolver);
  });
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
  //   mascotita.energia --;
  //   mascotita.hambre ++;
  //   mascotita.aburrimiento ++;
  //   console.log("Estoy viviendo");
  //   if(mascotita.edad == 10 || mascotita.energia == 0){
  //     clearInterval(viviendo);
  //   }
  // }, 100);
}

/* --------------------- Interacciones con la mascotita --------------------- */
