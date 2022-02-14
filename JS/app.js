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
  elements.btn1.replaceChildren(crearBoton("Alimentar", comer));
  elements.btn2.replaceChildren(crearBoton("Ejercitar", ejercitar));
  elements.btn3.replaceChildren(crearBoton("Jugar", jugar));
  elements.btn4.replaceChildren(crearBoton("Volver", ingresarNombreScreen));
  vivir();
  mostrarEstadoActual();
}

/* -------------------------------- Mascotita ------------------------------- */
const mascotita = {
  nombre: "",
  edad: 0,
  estado: "",
  kaomoji: "",
  energia: 10,
  hambre: 5,
  aburrimiento: 5,
};

/* ---------------------------------- Vivir --------------------------------- */
function vivir() {
  const viviendo = setInterval(() => {
    mascotita.edad++;
    mascotita.energia--;
    mascotita.hambre++;
    mascotita.aburrimiento++;
    console.log(mascotita);
    if (mascotita.edad >= 10 || mascotita.energia <= 0) {
      clearInterval(viviendo);
    }
  }, 9000);
}
/* ------------------------- Estados de la mascotita ------------------------ */
function mostrarEstadoActual() {
  const mostrarEstadoAhora = setInterval(() => {
    revisarSalud();

    elements.sectionKaomoji.innerHTML = mascotita.kaomoji;
    elements.sectionMensaje.innerHTML = mascotita.estado;

    if (mascotita.edad == 10 || mascotita.energia == 0) {
      clearInterval(mostrarEstadoAhora);
    }
  }, 5000);
}
const animoMascotita = {
    feliz: function estarFeliz() {
      const felizAleatorio = Math.random()*10;
      if(felizAleatorio <= 3){
        mascotita.kaomoji = `<p> <(￣︶￣)>	</p>`;
        mascotita.estado = `<p> Esto sí es estar feliz</p>`;
      }
      if(felizAleatorio > 3 && felizAleatorio <= 6){
        mascotita.kaomoji = `<p> (ﾉ´ヮ\`)ﾉ*:･ﾟ✧ </p>`;
        mascotita.estado = `<p> Feliz feliz jejeje gracias por tanto!!</p>`; 
      }
      else {
        mascotita.kaomoji = `<p> ☆*:.o(◠▽◠)o.:*☆
        </p>`;
        mascotita.estado = `<p> Wiii estoy súper! </p>`;
      }
  },
  aburrida: function estarAburrida() {
    mascotita.kaomoji = `<p> ¯\┐(￣ヘ￣)┌	/¯ </p>`;
      mascotita.estado = `<p> ufff... qué aburrimiento! </p>`;
  },
  hambrienta: function estarHambrienta() {
    mascotita.kaomoji = `<p>〜(>-<)〜 </p>`;
    mascotita.estado = `<p> Mi pancita hace ruido... tengo hambre! </p>`;
  },
  debil: function estarDebil() {
    mascotita.kaomoji = `<p> (￢_￢)	</p>`;
      mascotita.estado = `<p> Me siento débil... quiero entrenar</p>`;
  },
  aburridaHambrienta: function estoyAburridaHambrienta() {
    mascotita.kaomoji = `<p> (╥T_T╥)	</p>`;
    mascotita.estado = `<p> Quiero comer y hacer algo...jugamos? </p>`;
  },
  aburridaHambrientaDebil: function estoyAburridaHambrientaDebil() {
    mascotita.kaomoji = `<p>.｡･ﾟﾟ･(>_<)･ﾟﾟ･｡.
    </p>`;
    mascotita.estado = `<p>Tengo hambre!<br>
    Siento aburrimiento! <br>
    Estoy triste  </p>`;
  },
  hambrientaDebil: function estoyHambrientaDebil() {
    mascotita.kaomoji = `<p> ｡ﾟ･ ( >__< ) ･ﾟ｡
     </p>`;
    mascotita.estado = `<p> Me siento débil y encima tengo mucha hambre! </p>`;
  },
  aburridaDebil: function estoyAburridaDebil() {
    mascotita.kaomoji = `<p> (* ￣︿￣)</p>`;
    mascotita.estado = `<p> ¿Te acordas de mi? Porque estoy débil y quisiera jugar también</p>`;
  },
};

/* ------------------------ Chequeos de la mascotita ------------------------ */
function revisarSalud() {
  const valorAceptable = 5;
  if (mascotita.aburrimiento >= valorAceptable) {
    animoMascotita.aburrida();
  }
  if (mascotita.hambre >= valorAceptable) {
    animoMascotita.hambrienta();
  }
  if (mascotita.energia <= valorAceptable) {
    animoMascotita.debil();
  }
  if (
    mascotita.aburrimiento >= valorAceptable &&
    mascotita.hambrienta >= valorAceptable
  ) {
    animoMascotita.aburridaHambrienta();
  }
  if (
    mascotita.aburrimiento >= valorAceptable &&
    mascotita.hambrienta >= valorAceptable &&
    mascotita.energia <= valorAceptable
  ) {
    animoMascotita.aburridaHambrientaDebil();
  }
  if (
    mascotita.hambre >= valorAceptable &&
    mascotita.energia <= valorAceptable
  ) {
    animoMascotita.hambrientaDebil();
  }
  if (
    mascotita.aburrimiento >= valorAceptable &&
    mascotita.energia <= valorAceptable
  ) {
    animoMascotita.aburridaDebil();
  }
}

/* --------------------- Interacciones con la mascotita --------------------- */
function comer() {
  if(mascotita.hambre <=0){
    mascotita.hambre = 0;
  }else mascotita.hambre--;
  revisarSalud();
  elements.sectionMensaje.innerHTML = `<p>Mmmmm que rico!</p>`
}
function ejercitar() {
  mascotita.energia++;
  revisarSalud();
  elements.sectionMensaje.innerHTML = `<p>Me siento flash!</p>`
}
function jugar() {
  if(mascotita.aburrimiento <= 0){
    mascotita.aburrimiento = 0;
  } else mascotita.aburrimiento--;
  revisarSalud();
  elements.sectionMensaje.innerHTML = `<p>jejeje eso estuvo bueno</p>`
}
