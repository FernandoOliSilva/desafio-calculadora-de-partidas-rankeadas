//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"//


let saldo = somar(20, 5)

function somar(vitoria, derrota) {
  return vitoria - derrota
}

if (saldo <= 10){
  nivel = "Ferro"
} else if (saldo >= 11, saldo <= 20){
  nivel = "Bronze"
} else if (saldo >= 21, saldo <= 50){
  nivel = "Prata"
} else if (saldo >= 51, saldo <= 80){
  nivel = "Ouro"
} else if (saldo >= 81, saldo <= 90){
  nivel = "Diamante"
} else if (saldo >= 91, saldo <= 100){
  nivel = "Lendário"
} else if (saldo > 100){
  nivel = "Imortal"
}

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)