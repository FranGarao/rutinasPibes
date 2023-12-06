const confirmar = document.getElementById("queToca");
const reset = document.getElementById("reset");
document.getElementById("mostrarOpciones").disabled = true;
const select = document.getElementById("select");

confirmar.addEventListener("click", () => {
  event.preventDefault();
  const selectedOption = select.value.toUpperCase();

  switch (selectedOption) {
    case "PECHO":
      document.getElementById("pecho").classList.remove("none");
      confirmar.disabled = true;
      break;
    case "ESPALDA":
      document.getElementById("espalda").classList.remove("none");
      confirmar.disabled = true;
      break;
    case "PIERNA":
      document.getElementById("piernas").classList.remove("none");
      confirmar.disabled = true;
      break;
    case "HOMBRO":
      document.getElementById("hombros").classList.remove("none");
      confirmar.disabled = true;
      break;
    case "BRAZO":
      document.getElementById("brazos").classList.remove("none");
      confirmar.disabled = true;
      break;

    default:
      alert("Te puse opciones pelotudo elegi una");
      break;
  }
});

reset.addEventListener("click", () => {
  document.querySelectorAll("div").classList.add("none");
  confirmar.disabled = false;
});
