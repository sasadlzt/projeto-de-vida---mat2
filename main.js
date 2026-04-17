const botoes = document.querySelectorAll(".botao");
console.log(botoes);

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function (){
      for(let j=0;j<botoes.length;j++){
        botoes[j].classicList.remove("ativo");
      } 
      botoes[i].classicList.add("ativo"); 
    }
    console.log();
}
