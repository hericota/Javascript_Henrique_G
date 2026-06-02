function soma(x, b) {
    soma = x + b
    console.log("Resultado da soma é", soma)
}
soma(10, 10)

//atividade 2

function subtracao(x, b) {
    subtracao = x - b
    console.log(subtracao)
}

//atividade 3 

function multiplicao(x, b) {
    multiplicao = x * b
    console.log(multiplicao)
}

//atividade 4 

function divisao(x, b) {
    divisao = x / b
    console.log(divisao)
}
function resto(x, b) {
    resto = x % b
    console.log(resto)
}

function potencia(x, b) {
    potencia = x ** b
    console.log
}

function par_ou_impar(Num) {
    if (Num % 2 == 0){
        console.log("numero",Num,"é par")
    }
    else {
        console.log("numero",Num,"é impar")
    }
}
par_ou_impar(10)

function quadrado(num){
    quadrado= num**2
    console.log(quadrado)
}
function cubo(num){
    cubo= num**3
    console.log(cubo)
}
function celcius_fahrenheit(num){
    F = (num * 9/5) + 32
    console.log(num,"em fahrenheit é igual a",F)
    return(F)
}
console.log((celcius_fahrenheit(20))+32)

function media(num1,num2,num3){
    resultado=(num1+num2+num3)/3
    console.log(resultado)
}
function troco(valor_recebido,preco){
    troco=valor_recebido-preco
    if (troco > 0){console.log("devolver",troco,"R$")}
    else if (troco<0){console.log("ta faltando",troco*-1,"R$")}
    else{console.log("não precisa de troco")}

}
troco(20,21)