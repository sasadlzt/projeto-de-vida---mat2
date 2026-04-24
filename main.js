const botoes = document.querySelectorAll('.botao');
const abas = document.querySelectorAll('.aba-conteudo');

// tempos dos objetivos
const tempos = [
  new Date("2026-06-30T00:00:00"),
  new Date("2026-08-30T00:00:00"),
  new Date("2026-10-30T00:00:00"),
  new Date("2026-12-31T00:00:00")
];

function calculaTempo(tempoObjetivo) {
  let agora = new Date();
  let tempoFinal = tempoObjetivo - agora;

  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  if (tempoFinal > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}

function atualizaCronometro() {
  for (let i = 0; i < tempos.length; i++) {
    let tempo = calculaTempo(tempos[i]);

    document.getElementById(`dias${i}`).textContent = tempo[0];
    document.getElementById(`horas${i}`).textContent = tempo[1];
    document.getElementById(`min${i}`).textContent = tempo[2];
    document.getElementById(`seg${i}`).textContent = tempo[3];
  }
}

function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();

// troca de abas
botoes.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    abas.forEach(a => a.classList.remove('ativo'));

    botao.classList.add('ativo');
    abas[index].classList.add('ativo');
  });
});
