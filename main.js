const botoes = document.querySelectorAll('.botao');
const abas = document.querySelectorAll('.aba-conteudo');

botoes.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    // Remove ativo de todos
    botoes.forEach(b => b.classList.remove('ativo'));
    abas.forEach(a => a.classList.remove('ativo'));

    // Adiciona ativo ao clicado
    botao.classList.add('ativo');
    abas[index].classList.add('ativo');
  });
});
