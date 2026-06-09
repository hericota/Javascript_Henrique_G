/*let nota = Number(prompt("informe a nota: "))
if (nota >= 90) {
    alert("A")
}
else if (nota >= 80) {
    alert("B")
}
else {
    alert("C")
}

let dia = Number(prompt("fale o numero de um dia da semana: "))
switch (dia) {
    case 1: alert("domingo"); break;
    case 2: alert("segunda-feira"); break;
    case 3: alert("terça-feira"); break;
    case 4: alert("quarta-feira"); break;
    case 5: alert("quinta-feira"); break;
    case 6: alert("sexta-feira"); break;
    case 7: alert("sabado"); break;
    default: alert("Numero invalido"); break;
}
let temperatura = Number(prompt("fale a temperatura: "))

let temp = temperatura>25?"quente":"frio";
alert(temp)

let idade = (prompt("é maior? se for maior fale true: ")) === "true"
let carteira = (prompt("tem carteira? se tem fale true: ")) === "true"

if (idade && carteira){
    alert("pode dirigir")
}
else{
    alert("prenda esse criminoso")
}
let numero = Number(prompt("fale um numero"))

if(numero >=10 && numero <=20){
    alert("dentro do intervalo!")
}
else{
    alert("fora do intervalo!")
}
*/
let cores = prompt("fale vermelho amarelo ou verde").toLowerCase()
switch (toLowerCase) {
    case "vermelho": alert("pare"); break;
    case "amarelo": alert("atenção"); break;
    case "verde": alert("siga"); break;
    default: alert("entrada invalida")
}