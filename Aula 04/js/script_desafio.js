/*
let idade = Number(prompt("Fale sua idade"))
if (idade >= 18) {
    alert("maior de idade")
}
else {
    alert("menor de idade")
}
let tamanho = Number(prompt("digite 1,2 ou 3"))
switch (tamanho) {
    case 1: alert("pequeno"); break;
    case 2: alert("medio"); break;
    case 3: alert("grande"); break
    default: alert("invalido")
}
let numero_neg_pos = Number(prompt("fale qualquer numero"))
let neg_or_pos = numero_neg_pos>=0?"positivo":"negativo";
alert(neg_or_pos)
*/

let idade = Number(prompt("qual sua idade?"))
let carteira = (prompt("é cidadão brasileiro? ")) === "true"
if(idade>=16 && carteira){
    alert("pode votar")
}
else{
    alert("não pode votar")
}

