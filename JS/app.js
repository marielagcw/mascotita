/* ---------------------------------- Home ---------------------------------- */

const btnJugarSi = document.querySelector(".jugarSi");
const btnJugarNo = document.querySelector(".jugarNo");
const sectionMensaje = document.querySelector(".mensaje");
const sectionBotones = document.querySelector(".botones");

sectionMensaje.innerHTML += "<p>Holis! <br> Quieres jugar?</p>";

btnJugarSi.innerText = "Si";
btnJugarNo.innerText = "No";

btnJugarSi.addEventListener("click", (e) => jugar());

async function jugar() {
  sectionMensaje.innerText = "Cómo quieres que se llame tu mascotita?";
  sectionBotones.removeChild(btnJugarSi);
  sectionBotones.removeChild(btnJugarNo);
  sectionBotones.innerHTML = `
    <div class="ingresarNombreMascotita">
        <input class="inputs parpadea" id="inputNombre" placeholder="Ingresa el nombre aquí">
        <button class="btn" id="listo">Listo</button>
        <button class="btn" id="volver">Volver</button>
    </div>
    `;
  capturarNombre();
}

/* ---------------------------- Nombre Mascotita ---------------------------- */
function capturarNombre() {
  const inputNombre = document.querySelector("#inputNombre");
  const bntAddon2 = document.querySelector("#button-addon2");
  bntAddon2.addEventListener("click", (e) => {
    const nombreMascotita = inputNombre.value;
    renderizarNombre(nombreMascotita);
  });
}
function renderizarNombre(nombre) {}
