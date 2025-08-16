const botaoVoltar = document.getElementById("voltar-btn");
const botaoIr = document.getElementById("next-btn");
const imagens = document.querySelectorAll(".imagem");

let imagemAtual = 0;

botaoIr.addEventListener("click", function () {

    if (imagemAtual === imagens.length - 1) {
        return
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

botaoVoltar.addEventListener("click", function(){
    if (imagemAtual === 0){
        return
    }

    imagemAtual--;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

function mostrarImagem() {
  imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
  imagemAberta.classList.add("naoMostrar");
}

function mostrarOuEsconderSetas() {
  if (imagemAtual ===0) {
    botaoVoltar.classList.add("opacidade");
  }else {
    botaoVoltar.classList.remove("opacidade");
  }

  if (imagemAtual === imagens.length - 1) {
    botaoIr.classList.add("opacidade");
  }else {
    botaoIr.classList.remove("opacidade");
  }
}
