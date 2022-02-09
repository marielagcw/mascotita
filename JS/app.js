/* ---------------------------------- Home ---------------------------------- */

let sectionMensaje = document.querySelector(".mensaje");
let sectionBotones = document.querySelector(".botones");
let sectionKaomoji = document.querySelector(".kaomoji");

function jugar() {
  sectionMensaje.innerHTML = `<p>Holis! <br>¿Queres jugar?</p>`;
  sectionKaomoji.innerHTML = `<div>⁂*.<( ⁀▽⁀ )>*⁂
</div>`;
  sectionBotones.innerHTML = `
<button class="jugarSi btn">Si</button>
<button class="jugarNo btn">No</button>
`;

  let btnJugarSi = document.querySelector(".jugarSi");
  let btnJugarNo = document.querySelector(".jugarNo");
  btnJugarSi.addEventListener("click", (e) => ingresarNombre());
  btnJugarNo.addEventListener("click", (e) => {
    sectionMensaje.innerText =
      "Bueno, quizás en otra oportunidad nos conoceremos";
    sectionKaomoji.innerText = "(≧﹏ ≦)";
    sectionBotones.innerHTML = `
    <p>Gracias por tu visita</p>
    <p>Cuando quieras volver ingresa nuevamente a este website</p>
    `;
  });
}
function ingresarNombre() {
  sectionMensaje.innerText = "¿Cómo quieres que se llame tu mascotita?";
  sectionBotones.innerHTML = `
    <div id="ingresarNombreMascotita">
    <div class="alerta" id="alertaInputNombre"></div>
        <input type="text" class="inputs" id="inputNombre" placeholder="Ingresa el nombre aquí" required>
        <button class="btn" id="listo">Listo</button>
        <button class="btn" id="volver">Volver</button>
    </div>
    `;
  capturarNombre();

  let btnVolver = document.querySelector("#volver");
  btnVolver.addEventListener("click", (e) => {
    let btnListo = document.querySelector("#listo");
    let inputNombre = document.querySelector("#inputNombre");
    inputNombre.classList.add("displayNone");
    btnListo.classList.add("displayNone");
    btnVolver.classList.add("displayNone");
    jugar();
  });
}
/* ---------------------------- Nombre Mascotita ---------------------------- */
function capturarNombre() {
  let bntListo = document.querySelector("#listo");
  let inputNombre = document.querySelector("#inputNombre");
  bntListo.addEventListener("click", (e) => {
    let nombreMascotita = inputNombre.value;
    validarNombre(nombreMascotita);
  });
}
function validarNombre(nombre) {
  if (!nombre || nombre.length < 3) {
    let alertaInputNombre = document.querySelector("#alertaInputNombre");
    alertaInputNombre.innerText = "Por favor ingresa al menos 3 letras";
    setTimeout(() => {
      alertaInputNombre.classList.add("hidden");
    }, 2000);
    alertaInputNombre.classList.remove("hidden");
    alertaInputNombre;
    capturarNombre();
    console.log("verificar");
  }
  saludar(nombre);
}
function saludar(nombre) {
  console.log("Holis! soy " + nombre);
}
jugar();
