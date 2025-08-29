document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".features-buttons button");
  const slides = document.querySelectorAll(".feature-slide");

  function ativarSlide(alvo) {
    slides.forEach(slide => {
      if (slide.dataset.content === alvo) {
        slide.classList.add("ativo");
      } else {
        slide.classList.remove("ativo");
      }
    });
  }

  botoes.forEach(botao => {
    botao.addEventListener("click", function () {
      botoes.forEach(btn => btn.classList.remove("ativo"));
      this.classList.add("ativo");

      const alvo = this.dataset.target;
      ativarSlide(alvo);
    });
  });

  const botaoAtivoInicial = document.querySelector(".features-buttons button.ativo");

  if (botaoAtivoInicial) {
    const alvoInicial = botaoAtivoInicial.dataset.target;
    ativarSlide(alvoInicial);
  }
});
