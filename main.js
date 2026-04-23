const botoes = document.querySelectorAll('.botao');
const abas = document.querySelectorAll('.aba-conteudo');
const textos = document.querySelectorAll('.texto');
const contadores = document.querySelectorAll(".contador");  // Selecionando os contadores

// Definindo as datas de cada objetivo
const temposObjetivos = [
  new Date("2023-10-05T00:00:00"),  // Objetivo 1
  new Date("2024-03-10T00:00:00"),  // Objetivo 2
  new Date("2024-06-15T00:00:00"),  // Objetivo 3
  new Date("2024-09-01T00:00:00")   // Objetivo 4
];

// Função para calcular o tempo restante
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();  // Pega o tempo atual
  let tempoFinal = tempoObjetivo - tempoAtual;  // Diferença entre o objetivo e o tempo atual
  
  // Calcula o número de segundos restantes
  let segundos = Math.floor(tempoFinal / 1000);
  
  // Calcula minutos, horas e dias restantes
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  
  // Ajusta para exibir corretamente as unidades (segundos, minutos, horas)
  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  // Retorna o tempo no formato: "X dias X horas X minutos X segundos"
  return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// Atualiza o contador de cada objetivo
function atualizarContador(indice) {
  contadores[indice].textContent = calculaTempo(temposObjetivos[indice]);
}

// Função para alternar as abas e os textos
botoes.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    // Remove a classe 'ativo' de todos os botões, abas, textos e contadores
    botoes.forEach(b => b.classList.remove('ativo'));
    abas.forEach(a => a.classList.remove('ativo'));
    textos.forEach(t => t.classList.remove('ativo'));

    // Limpa os contadores ao trocar de aba
    contadores.forEach(c => c.textContent = "");

    // Adiciona a classe 'ativo' ao botão, aba, texto e contador correspondentes
    botao.classList.add('ativo');
    abas[index].classList.add('ativo');
    textos[index].classList.add('ativo');

    // Atualiza o contador para o objetivo da aba selecionada
    atualizarContador(index);
  });
});

// Função para atualizar a contagem regressiva a cada segundo
setInterval(() => {
  botoes.forEach((botao, index) => {
    // Atualiza os contadores de todas as abas
    if (botao.classList.contains('ativo')) {
      atualizarContador(index);  // Atualiza o contador da aba ativa
    }
  });
}, 1000);
