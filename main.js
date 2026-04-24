const botoes = document.querySelectorAll('.botao');
const abas = document.querySelectorAll('.aba-conteudo');
const contadores = document.querySelectorAll('.contador');

// tempo atual
const agora = new Date();

// tempos (modelo do professor)
const temposObjetivos = [
  new Date(agora.getTime() + 62 * 24 * 60 * 60 * 1000),
  new Date(agora.getTime() + 123 * 24 * 60 * 60 * 1000),
  new Date(agora.getTime() + 148 * 24 * 60 * 60 * 1000),
  new Date(agora.getTime() + 181 * 24 * 60 * 60 * 1000)
];

// calcula tempo restante
function calculaTempo(tempoObjetivo) {
  const agora = new Date();
  const tempoFinal = tempoObjetivo - agora;

  if (tempoFinal <= 0) {
    return `
      <div class="contador-digito">
        <p class="contador-digito-numero">0</p>
        <p class="contador-digito-texto">Finalizado</p>
      </div>
    `;
  }

  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return `
    <div class="contador-digito">
      <p class="contador-digito-numero">${dias}</p>
      <p class="contador-digito-texto">dias</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero">${horas}</p>
      <p class="contador-digito-texto">horas</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero">${minutos}</p>
      <p class="contador-digito-texto">min</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero">${segundos}</p>
      <p class="contador-digito-texto">seg</p>
    </div>
  `;
}

// atualiza todos os contadores
function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    contadores[i].innerHTML = calculaTempo(temposObjetivos[i]);
  }
}

// inicia cronômetro
atualizaCronometro();
setInterval(atualizaCronometro, 1000);

// troca de abas
botoes.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    abas.forEach(a => a.classList.remove('ativo'));

    botao.classList.add('ativo');
    abas[index].classList.add('ativo');
  });
});
