const prompt = require('prompt-sync')();
console.clear();

console.log("VAMOS JOGAR JOKENPÔ!!!")

let start = "sim";
while (start != "sim" && start != "nao") {
    }   

let vitoria = 0;
let derrota = 0;
let empate = 0;
let lista = [ `PEDRA`, `PAPEL`, `TESOURA`];

while (start == "sim") {

let npartidas = +prompt(`\nQuantas partidas gostaria de jogar?: `)

let jogador 
let computador
escolhajog = 0;
escolhapc = 0;

for (let i = 0; i <= npartidas; i++) {
    escolhajog = +prompt(`Digite sua escolha: (0)-PEDRA (1)-PAPEL (2)-TESOURA: `);
 console.log();
  escolhapc = Math.floor(Math.random() * 3);

  while (escolhajog < 0 || escolhajog > 2 || isNaN(escolhajog)) {
        
    console.log();
          }
  (jogador = lista[escolhajog]), (computador = lista[escolhapc]);

     console.log(`VOCÊ: ${jogador}`);
     console.log(`COMPUTADOR: ${computador}`);
   
     if (jogador == computador) {
       console.log("\nJooookeeeennnpoooô!");
       console.log();
           console.log(`DEU EMPATE`);
       console.log();
       empate ++
     } else if (
       (jogador == `PAPEL` || computador == `PEDRA`) ||
       (jogador == `PEDRA` || computador == `TESOURA`) ||
       (jogador == `TESOURA` || computador == `PAPEL`)
     ) {
       console.log("\nJooookeeeennnpoooô!");
       console.log();
       console.log(`PARABÉNS!!! VOCÊ VENCEU! :)`);
       console.log();
       vitoria++;
     } else {
       console.log("\nJooookeeeennnpoooô!");
       console.log();
       console.log(`NÃO FOI DESSA VEZ,VOCÊ PERDEU! :(`);
       console.log();
      derrota++;sim
     }            
          
}
console.log(`Numero de Vitórias: ${vitoria}`)
console.log(`Numero de Empates: ${empate}`)
console.log(`Numero de Derrotas: ${derrota}\n\n`)
  
if (vitoria>derrota) {
    console.log(`\nVocê obteve: ${vitoria}, Parabéns você VENCEU :)!\n`)
}else if (vitoria=derrota){
    console.log(`\nVocê obteve: ${empate}, e o computador: ${empate} Você Empataram!\n`)
} else {
    console.log(`\nVocê obteve: ${vitoria}, Você Perdeu :(!\n`)
}
 start = prompt("Gostaria de jogar novamente? Digite sim ou nao: ").toLowerCase();

while (start != "sim" && start != "nao"){
        start = prompt("Gostaria de jogar novamente?: ").toLowerCase();
}   
if (start == "nao") {
    console.log()
    console.log("Fim do Jogo!");       
}else{    
}
}
