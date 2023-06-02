const listaDeTeclas = document.querySelectorAll(".tecla");

const tocaSom = (seletorAudio) => {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento ou seletor inválido");
  }
};

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas;

  const instrumento = tecla[i].classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla[i].onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (event) {
    if (event.key === "Space" || event.key === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
