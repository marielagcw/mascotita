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
  elements.sectionMensaje.innerHTML = `
  <p>Holis! ¿Queres jugar?</p>
  `;
  elements.sectionKaomoji.innerHTML = `
  <p>⁂*.<( ⁀▽⁀ )>*⁂</p>
  `;
  elements.btn1.innerHTML = `
  <button class="btn">Si</button>
  `;
  elements.btn2.innerHTML = `
  <button class="btn">No</button>
  `;
  elements.btn1.addEventListener("click", () => {
    ingresarNombre();
    elements.btn1.innerHTML = `
    <button class="btn">Listo</button>
    `;
    elements.btn2.innerHTML =`
    <button class="btn">Volver</button>
    ` ;
  });
  elements.btn2.addEventListener("click", () => {
    elements.sectionKaomoji.innerHTML = `
    <(≧^≦)>;
    `;
    elements.sectionMensaje.innerHTML = `
    <p>Bueno, quizás en otra oportunidad nos conoceremos</p>
    <p>Gracias por tu visita</p>
    <p>Cuando quieras volver ingresa nuevamente a este website</p>
    `;
    elements.btn1.innerHTML = "";
    elements.btn2.innerHTML = "";
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
  elements.btn1.addEventListener("click", () => {
    const nombreMascotita = inputNombre.value;
    validarNombre(nombreMascotita);
  });
  elements.btn2.addEventListener("click", () => {
    jugar();
  });
}
/* ---------------------------- Validar input Nombre ---------------------------- */
function validarNombre(nombre) {
  if (!nombre || nombre.length < 3) {
    elements.alerta.classList.remove("hidden");
    elements.alerta.innerHTML =`
    <p>Por favor ingresa al menos 3 letras</p>
    `;
    setTimeout(() => {
      elements.alerta.classList.add("hidden");
    }, 2000);
    ingresarNombre();
  } else saludar(nombre);
}

/* -------------------------------------------------------------------------- */
/*                            Inicia vida mascotita                           */
/* -------------------------------------------------------------------------- */
function saludar(nombre) {
  if(elements.sectionKaomoji.hasChildNodes()){
    elements.sectionKaomoji.innerHTML = `
    <p>(つ≧▽≦)つ	</p>
    `
  } 
  elements.sectionMensaje.innerHTML = `
  <p>Holis! Soy ${nombre}! <br>gracias por jugar conmigo</p>
  `
  elements.alerta.innerHTML = "";
  elements.btn1.innerHTML = "";
  elements.btn2.addEventListener("click", ()=>{
    ingresarNombre();
  });
}
