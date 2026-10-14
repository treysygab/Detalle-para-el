// SALIDA DE LA CARRERA: no modificar si ya funciona correctamente.
const botonInicio = document.getElementById("botonInicio");
const contenido = document.getElementById("contenido");
const luces = document.querySelectorAll(".luces span");

let carreraIniciada = false;
botonInicio.addEventListener("click", function () {
  if (carreraIniciada) return;
  carreraIniciada = true;
  botonInicio.disabled = true;
  botonInicio.textContent = "PREPARADOS...";
  let contador = 0;
  const intervalo = setInterval(function () {
    luces[contador].classList.add("encendida");
    contador++;
    if (contador === luces.length) {
      clearInterval(intervalo);
      botonInicio.textContent = "¡A CORRER!";
      setTimeout(function () {
        luces.forEach(function (luz) { luz.classList.remove("encendida"); });
        contenido.style.display = "block";
        contenido.classList.add("contenido-visible");
        contenido.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 900);
    }
  }, 450);
});

// ABRIR LA ÚLTIMA SORPRESA
const botonMensaje = document.getElementById("botonMensaje");
const sorpresa = document.getElementById("sorpresa");
const botonRevelar = document.getElementById("botonRevelar");
const detalleFinal = document.getElementById("detalleFinal");
const celebracionMeta = document.getElementById("celebracionMeta");

botonMensaje.addEventListener("click", function () {
  sorpresa.classList.add("mostrar");
  botonMensaje.textContent = "🏁 ÚLTIMA PARADA ABIERTA";
  botonMensaje.disabled = true;
  setTimeout(function () {
    sorpresa.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);
});

botonRevelar.addEventListener("click", function () {
  detalleFinal.classList.add("revelado");
  botonRevelar.textContent = "🏁 ¡META ALCANZADA!";
  botonRevelar.disabled = true;
  celebracionMeta.setAttribute("aria-hidden", "false");
  celebrarMeta();
  setTimeout(function () {
    detalleFinal.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 150);
});

function celebrarMeta() {
  const simbolos = ["🏁", "✦", "🏎️", "✧", "★"];
  for (let i = 0; i < 65; i++) {
    const particula = document.createElement("span");
    particula.className = "particula-meta";
    particula.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    particula.style.setProperty("--posicion-x", Math.random() * 100 + "vw");
    particula.style.setProperty("--tamano", (12 + Math.random() * 20) + "px");
    particula.style.setProperty("--duracion", (2 + Math.random() * 2) + "s");
    particula.style.setProperty("--deriva", (Math.random() * 240 - 120) + "px");
    particula.style.setProperty("--rotacion", (Math.random() * 720 - 360) + "deg");
    document.body.appendChild(particula);
    setTimeout(function () { particula.remove(); }, 4500);
  }
}

// SELECCIÓN DE PILOTOS
const pilotos = document.querySelectorAll(".piloto");
pilotos.forEach(function (piloto) {
  function seleccionarPiloto() {
    pilotos.forEach(function (otroPiloto) {
      if (otroPiloto !== piloto) otroPiloto.classList.remove("seleccionado");
    });
    piloto.classList.toggle("seleccionado");
  }
  piloto.addEventListener("click", seleccionarPiloto);
  piloto.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      seleccionarPiloto();
    }
  });
});

// DETALLE PERSONAL
const botonMiMundo = document.getElementById("botonMiMundo");
const miMundoOculto = document.getElementById("miMundoOculto");
botonMiMundo.addEventListener("click", function () {
  miMundoOculto.classList.add("visible");
  botonMiMundo.textContent = "AHORA YA SABES UN POQUITO MÁS";
  botonMiMundo.disabled = true;
  miMundoOculto.scrollIntoView({ behavior: "smooth", block: "center" });
});
