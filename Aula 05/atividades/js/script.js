// let soma = 0
// for(let i = 0; i<=500; i++){
//     if(i%2==0){
//         console.log("par:"+i)
//     }
//     else{
//         console.log("impar:"+i)
//     }
// }

// opcao = true
// while (opcao) {
//     console.log("bom dia")
//     let escolha = prompt("quer parar s/n").toLowerCase()
//     if (escolha == "s") {
//         alert("tchau")
//         opcao = false
//     }
//     else {
//         continue
//     }
// }

// let lista = [1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < lista.length; index++) {
//     const element = lista[index];
//     console.log(element);
// }

// for (let index = 0; index < 11; index++) {
//     console.log(index);
// }

//
// for(let i = 0; i<=20; i++){
//     if(i%2==0){
//         console.log("par:"+i)
//     }
// }


// let cronometro = 5
// while(cronometro>0){
//     console.log(cronometro)
//     cronometro--
// }
// console.log("Lançamento!!!")

// let energia=100
// while(energia>0){
//     console.log("você tem "+energia,"de energia")
//     energia= energia-10
// }
// console.log("sua energia acabou")

// jogar = true
// while (jogar) {
//     let escolha = Number(prompt("1 = jogar  2 = ranking  3 = sair"))
//     switch (escolha) {
//         case 1: alert("você esta jogando"); continue;
//         case 2: alert("só tem você jogando logo, Você é o top 1"); continue;
//         case 3: jogar = false;
//         default: continue
//     }
// }


// let filmes = ["homem aranha", "homem de ferro", "hulk","batata o filme", "se puder me pegue"]
// for (let index = 0; index < filmes.length; index++) {
//     const element = filmes[index];
//     console.log(element);
// }

// let notas=[7, 8, 10, 5];
// let soma_notas = 0;
// for (let index = 0; index < notas.length; index++) {
//     const element = notas[index];
//     soma_notas = soma_notas+element;
// }
// let media = soma_notas / notas.length;
// console.log("resultado da soma é "+soma_notas);
// console.log("resultado da media é "+media);

// let idades = [15, 18, 22, 13, 30]
// let maior_numero = 0
// for (let index = 0; index < idades.length; index++) {
//     const element = idades[index];
//     if (element > maior_numero){
//         maior_numero=element
//     }
// }
// console.log("O maior numero é:"+maior_numero)

// let preço_produ = [10.50, 25.00, 8.99, 12.75]
// let menor_numero = 1000
// for (let index = 0; index < preço_produ.length; index++) {
//     const element = preço_produ[index];
//     if (element < maior_numero){
//         menor_numero=element
//     }
// }
// console.log("o menor numero numero é:"+menor_numero)
let jogadores = [];
let pontos = [];
for (let i = 0; i < 3; i++) {

    let nome = prompt("Digite o nome:");

    let pontuacao = Number(
        prompt("Digite a pontuação:")
    );

    jogadores.push(nome);
    pontos.push(pontuacao);
}

for (let i = 0; i < jogadores.length; i++) {

    console.log(
        jogadores[i] +
        " - " +
        pontos[i]
    );
}