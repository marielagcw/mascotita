/* -------------------------------- Llamados al DOM ------------------------------- */
const elements = {
  sectionKaomoji: document.querySelector(".kaomoji"),
  sectionMensaje: document.querySelector(".mensaje"),
  sectionBotones: document.querySelector(".botones"),
  btn1: document.querySelector("#divBtn1"),
  btn2: document.querySelector("#divBtn2"),
  btn3: document.querySelector("#divBtn3"),
  btn4: document.querySelector("#divBtn4"),
  sectionAlerta: document.querySelector(".alerta"),
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
  <p>(->￣▽￣)-></p>
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
  elements.btn4.replaceChildren(crearBoton("Volver", reiniciar));
}
function validarNombre() {
  const inputNombre = document.querySelector("#inputNombre");
  const nombreMascotita = inputNombre.value;
  if (!nombreMascotita || nombreMascotita.length < 3) {
    elements.sectionAlerta.classList.remove("hidden");
    elements.sectionAlerta.innerHTML = `
    <p>Por favor ingresa al menos 3 letras</p>
    `;
    setTimeout(() => {
      elements.sectionAlerta.classList.add("hidden");
    }, 2000);
  } else {
    saludarScreen(nombreMascotita);
    elements.btn4.replaceChildren(crearBoton("Volver", reiniciar));
  }
}

/* -------------------------------- Mascotita ------------------------------- */
const mascotita = {
  nombre: "",
  edad: 0,
  estado: "",
  kaomoji: "",
  energia: 10,
  hambre: 0,
  aburrimiento: 0,

  crearLineaEnergia: () => {
    mascotita.lineaEnergia = new ProgressBar.Line(".barraEnergia", {
      from: { color: "#FF6856" },
      to: { color: "#00E186 " },
      step: function (state, bar, attachment) {
        bar.path.setAttribute("stroke", state.color);
      },
      strokeWidth: 5,
      trailColor: "#949494",
      trailWidth: 0.8,
      trailWidth: 4,
      duration: 500,
      easing: "linear",
      text: {
        style: {
          color: "#ffffff",
          position: "relative",
          left: "0%",
          top: "0%",
          padding: 0,
          margin: 5,
          transform: {
            prefix: true,
            value: "translate(-0%, -0%)",
          },
        },
        value: "Fuerza",
        className: "progressbar-text",
      },
    });
  },
  lineaEnergia: null,
  crearLineaAburrimiento: () => {
    mascotita.lineaAburrimiento = new ProgressBar.Line(".barraAburrimiento", {
      from: { color: "#00E186" },
      to: { color: "#FF6856" },
      step: function (state, bar, attachment) {
        bar.path.setAttribute("stroke", state.color);
      },
      strokeWidth: 5,
      trailColor: "#949494",
      trailWidth: 4,
      duration: 500,
      easing: "linear",
      text: {
        style: {
          color: "#ffffff",
          position: "relative",
          left: "0%",
          top: "0%",
          padding: 0,
          margin: 5,
          transform: {
            prefix: true,
            value: "translate(-0%, -0%)",
          },
        },
        value: "Aburrimiento",
        className: "progressbar-text",
      },
    });
  },
  lineaAburrimiento: null,
  crearLineaHambre: () => {
    mascotita.lineaHambre = new ProgressBar.Line(".barraHambre", {
      from: { color: "#00E186" },
      to: { color: "#FF6856" },
      step: function (state, bar, attachment) {
        bar.path.setAttribute("stroke", state.color);
      },
      strokeWidth: 5,
      trailWidth: 4,
      trailColor: "#949494",
      duration: 500,
      easing: "linear",
      text: {
        style: {
          color: "#ffffff",
          position: "relative",
          left: "0%",
          top: "0%",
          padding: 0,
          margin: 5,
          transform: {
            prefix: true,
            value: "translate(-0%, -0%)",
          },
        },
        value: "Hambre",
        className: "progressbar-text",
      },
    });
  },
  lineaHambre: null,
};

/* -------------------------- Inicia vida Mascotita ------------------------- */
function saludarScreen(nombre) {
  // Estado inicial de la mascotita
  mascotita.nombre = nombre;
  mascotita.edad = 0;
  mascotita.kaomoji = `<p>(つ≧▽≦)つ	</p>`;
  mascotita.energia = 6;
  mascotita.hambre = 4;
  mascotita.aburrimiento = 3;
  mascotita.crearLineaEnergia();
  mascotita.crearLineaAburrimiento();
  mascotita.crearLineaHambre();

  // Pantalla saludo
  if (elements.sectionKaomoji.hasChildNodes()) {
    elements.sectionKaomoji.innerHTML = mascotita.kaomoji;
  }
  elements.sectionMensaje.innerHTML = `
  <p>Holis! Soy ${nombre}! <br>gracias por jugar conmigo</p>
  `;

  // Nuevos botones
  elements.btn1.replaceChildren(crearBoton("Alimentar", comer));
  elements.btn2.replaceChildren(crearBoton("Ejercitar", ejercitar));
  elements.btn3.replaceChildren(crearBoton("Jugar", jugar));
  elements.btn4.replaceChildren(crearBoton("Volver", reiniciar));
  vivir();
}

/* ---------------------------------- Vivir --------------------------------- */
const edadMaxima = 10;
const intervaloVivir = 15000;
const intervaloEstado = 5000;

function vivir() {
  actualizarBarras();
  mostrarEstadoActual();
  viviendo = setInterval(() => {
    mascotita.edad++;
    mascotita.energia--;
    console.log(mascotita);
    if (mascotita.edad >= edadMaxima || mascotita.energia <= 0) {
      clearInterval(viviendo);
      inicioScreen();
    }
  }, intervaloVivir);
}

/* ------------------------- Estados de la mascotita ------------------------ */
function mostrarEstadoActual() {
  const mostrarEstadoAhora = setInterval(() => {
    revisarSalud();
    mascotita.hambre++;
    mascotita.aburrimiento++;
    if (mascotita.edad >= edadMaxima || mascotita.energia <= 0) {
      clearInterval(mostrarEstadoAhora);
    }

    elements.sectionKaomoji.innerHTML = mascotita.kaomoji;
    elements.sectionMensaje.innerHTML = mascotita.estado;
  }, intervaloEstado);
}
const animoMascotita = {
  dormida: () => {
    mascotita.kaomoji = `<p> /ᐠ｡ꞈ｡ᐟ\\ <br>ZzzzZZz</p>`;
    mascotita.estado = `<p> Estoy descansando... </p>`;
  },
  feliz: function estarFeliz() {
    mascotita.kaomoji = `<p> (ﾉ'ヮ')ﾉ*:･ﾟ✧ </p>`;
    mascotita.estado = `<p> ¡Gracias por visitarme! <br> ¿Hacemos algo?</p>`;
  },
  aburrida: function estarAburrida() {
    mascotita.kaomoji = `<p> ¯\┐(￣ヘ￣)┌	/¯ </p>`;
    mascotita.estado = `<p> ufff... Quiero jugar </p>`;
  },
  hambrienta: function estarHambrienta() {
    mascotita.kaomoji = `<p>〜( > _ < )〜 </p>`;
    mascotita.estado = `<p> Mi pancita hace ruido... tengo hambre! </p>`;
  },
  debil: function estarDebil() {
    mascotita.kaomoji = `<p> (￢_￢)	</p>`;
    mascotita.estado = `<p> Necesito entrenar</p>`;
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
    mascotita.estado = `<p> Quiero entrenar y también tengo hambre! </p>`;
  },
  aburridaDebil: function estoyAburridaDebil() {
    mascotita.kaomoji = `<p> (* ￣︿￣)</p>`;
    mascotita.estado = `<p> ¿Te acordas de mi? Porque estoy débil y quisiera jugar</p>`;
  },
};

/* ------------------------ Chequeos de la mascotita ------------------------ */
function revisarSalud() {
  const valorEstoyAburrida = 4;
  const valorEstoyHambrienta = 5;
  const valorEstoyDebil = 6;
  if (mascotita.energia > 9) {
    mascotita.energia = 9;
  }
  if (mascotita.aburrimiento > 9) {
    mascotita.aburrimiento = 9;
  }
  if (mascotita.hambre > 9) {
    mascotita.hambre = 9;
  }
  if (
    mascotita.energia >= 6 &&
    mascotita.aburrimiento < 3 &&
    mascotita.hambre < 3
  ) {
    animoMascotita.feliz();
    console.log(
      " Nombre: " +
        mascotita.nombre +
        "\n Edad: " +
        mascotita.edad +
        " \n Estado: Estoy feliz" +
        "\n Nivel de aburrimiento: " +
        mascotita.aburrimiento +
        "\n Nivel de hambre: " +
        mascotita.hambre +
        "\n Nivel de energía: " +
        mascotita.energia
    );
  } else {
    let valor = "";
    valor += mascotita.aburrimiento >= valorEstoyAburrida ? 1 : 0;
    valor += mascotita.hambre >= valorEstoyHambrienta ? 1 : 0;
    valor += mascotita.energia <= valorEstoyDebil ? 1 : 0;

    valor = parseInt(valor, 2);

    switch (valor) {
      case 7:
        animoMascotita.aburridaHambrientaDebil();
        console.log(
          " Nombre: " +
            mascotita.nombre +
            "\n Edad: " +
            mascotita.edad +
            " \n Estado: Estoy aburrida, hambrienta y débil " +
            "\n Nivel de aburrimiento: " +
            mascotita.aburrimiento +
            "\n Nivel de hambre: " +
            mascotita.hambre +
            "\n Nivel de energía: " +
            mascotita.energia
        );
        break;
      // case 0:
      //   animoMascotita.feliz();
      //   console.log(
      //     " Estoy Feliz" +
      //       "\n Nivel de aburrimiento: " +
      //       mascotita.aburrimiento +
      //       "\n Nivel de hambre: " +
      //       mascotita.hambre +
      //       "\n Nivel de energía: " +
      //       mascotita.energia
      //   );
      //   break;
      case 6:
        animoMascotita.aburridaHambrienta();
        console.log(
          " Nombre: " +
            mascotita.nombre +
            "\n Edad: " +
            mascotita.edad +
            " \n Estado: Estoy aburrida y hambrienta " +
            "\n Nivel de aburrimiento: " +
            mascotita.aburrimiento +
            "\n Nivel de hambre: " +
            mascotita.hambre +
            "\n Nivel de energía: " +
            mascotita.energia
        );
        break;
      case 3:
        animoMascotita.hambrientaDebil();
        console.log(
          " Nombre: " +
            mascotita.nombre +
            "\n Edad: " +
            mascotita.edad +
            " \n Estado: Estoy hambrienta y débil " +
            "\n Nivel de aburrimiento: " +
            mascotita.aburrimiento +
            "\n Nivel de hambre: " +
            mascotita.hambre +
            "\n Nivel de energía: " +
            mascotita.energia
        );
        break;
      case 5:
        animoMascotita.aburridaDebil();
        console.log(
          " Nombre: " +
            mascotita.nombre +
            "\n Edad: " +
            mascotita.edad +
            " \n Estado: Estoy aburrida y débil " +
            "\n Nivel de aburrimiento: " +
            mascotita.aburrimiento +
            "\n Nivel de hambre: " +
            mascotita.hambre +
            "\n Nivel de energía: " +
            mascotita.energia
        );
        break;
      case 4:
        animoMascotita.aburrida();
        console.log(
          " Nombre: " +
            mascotita.nombre +
            "\n Edad: " +
            mascotita.edad +
            " \n Estado: Estoy aburrida " +
            "\n Nivel de aburrimiento: " +
            mascotita.aburrimiento +
            "\n Nivel de hambre: " +
            mascotita.hambre +
            "\n Nivel de energía: " +
            mascotita.energia
        );
        break;
      case 2:
        animoMascotita.hambrienta();
        console.log(
          " Nombre: " +
            mascotita.nombre +
            "\n Edad: " +
            mascotita.edad +
            " \n Estado:Estoy hambrienta " +
            "\n Nivel de aburrimiento: " +
            mascotita.aburrimiento +
            "\n Nivel de hambre: " +
            mascotita.hambre +
            "\n Nivel de energía: " +
            mascotita.energia
        );
        break;
      case 1:
        animoMascotita.debil();
        console.log(
          " Nombre: " +
            mascotita.nombre +
            "\n Edad: " +
            mascotita.edad +
            " \n Estado: Estoy débil " +
            "\n Nivel de aburrimiento: " +
            mascotita.aburrimiento +
            "\n Nivel de hambre: " +
            mascotita.hambre +
            "\n Nivel de energía: " +
            mascotita.energia
        );
        break;
      default:
        animoMascotita.dormida();

        console.log(
          " Nombre: " +
            mascotita.nombre +
            "\n Edad: " +
            mascotita.edad +
            " \n Estado:Estoy durmiendo " +
            "\n Nivel de aburrimiento: " +
            mascotita.aburrimiento +
            "\n Nivel de hambre: " +
            mascotita.hambre +
            "\n Nivel de energía: " +
            mascotita.energia
        );
    }
  }
}

/* --------------------- Interacciones con la mascotita --------------------- */
function comer() {
  if (mascotita.hambre < 0) {
    mascotita.hambre = 0;
  } else mascotita.hambre--;
  revisarSalud();
  elements.sectionKaomoji.innerHTML = `<p><(￣︶￣)>	</p>`;
  elements.sectionMensaje.innerHTML = `<p>Jejeje ahora sí
  ya estoy con la panza llena </p>`;
}
function ejercitar() {
  mascotita.energia++;
  revisarSalud();
  elements.sectionKaomoji.innerHTML = `<p>─=≡Σ((( つ > <)つ</p>
  `;
  elements.sectionMensaje.innerHTML = `<p>Me siento flash!</p>`;
}
function jugar() {
  if (mascotita.aburrimiento < 0) {
    mascotita.aburrimiento = 0;
  } else mascotita.aburrimiento--;
  revisarSalud();
  elements.sectionKaomoji.innerHTML = `<p>☆*:.o(◠▽◠)o.:*☆
</p>`;
  elements.sectionMensaje.innerHTML = `<p>Wiii eso fue sorprendente!!! <br>
  ¿Qué hacemos ahora?</p>`;
}
function reiniciar() {
  mascotita.energia = 0;
  elements.sectionKaomoji.innerHTML = `
  <p>⁂*.<( ⁀▽⁀ )>*⁂</p>
  `;
  elements.sectionMensaje.innerHTML = `
  <p>Holis! ¿Queres jugar?</p>
  `;
  mascotita.lineaAburrimiento.destroy();
  mascotita.lineaEnergia.destroy();
  mascotita.lineaHambre.destroy();
  elements.btn1.innerHTML = "";
  elements.btn2.innerHTML = "";
  elements.btn3.innerHTML = "";
  elements.btn4.innerHTML = "";
}
function actualizarBarras(){
const actualizarBarras = setInterval(()=>{
  mascotita.lineaEnergia.animate(mascotita.energia / 10);
  mascotita.lineaAburrimiento.animate(mascotita.aburrimiento / 10);
  mascotita.lineaHambre.animate(mascotita.hambre / 10);
}, 100);
if (mascotita.edad >= edadMaxima || mascotita.energia <= 0) {
  clearInterval(viviendo);
  inicioScreen();
};
}