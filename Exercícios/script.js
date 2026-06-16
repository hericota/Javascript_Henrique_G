/*
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
    if (Num % 2 == 0) {
        console.log("numero", Num, "é par")
    }
    else {
        console.log("numero", Num, "é impar")
    }
}
par_ou_impar(10)

function quadrado(num) {
    quadrado = num ** 2
    console.log(quadrado)
}
function cubo(num) {
    cubo = num ** 3
    console.log(cubo)
}
function celcius_fahrenheit(num) {
    F = (num * 9 / 5) + 32
    console.log(num, "em fahrenheit é igual a", F)
    return (F)
}
console.log((celcius_fahrenheit(20)) + 32)

function media(num1, num2, num3) {
    resultado = (num1 + num2 + num3) / 3
    console.log(resultado)
}
function troco(valor_recebido, preco) {
    troco = valor_recebido - preco
    if (troco > 0) { console.log("devolver", troco, "R$") }
    else if (troco < 0) { console.log("ta faltando", troco * -1, "R$") }
    else { console.log("não precisa de troco") }

}
troco(20, 21)

function comparacoes(valor1, valor2){
    if (valor1===valor2){
        console.log("valores são iguais(===)")
    }
    else if (valor1==valor2){
        console.log("valores são iguais porem tipos podem ser diferente(==)")
    }
    else{
        console.log("valores são diferentes")
    }
}
function valor_maior_menor(num1,num2){
    if (num1 > num2){
        console.log(num1,"é maior que",num2)
    }
    else if(num1<num2){
        console.log(num2,"é maior que",num1)
    }
    else{
        console.log("Numeros são iguais")
    }
}

function boletim(){
    let nota1= Number(prompt("fale a primeira nota"))
    let nota2= Number(prompt("fale a segunda nota"))
    let nota3= Number(prompt("fale a terceira nota"))
    media= (nota1+nota2+nota3)/3
    if (media>=7){
        alert("você passou")
    }
    else if(media<7 & media>=6){
        alert("exame")
    }
    else{
        alert("você reprovou")
    }
}

function maior_18(){
    let idade = Number(prompt("Informe a idade"))
    if (idade>=18){
        alert("Maior de idade")
    }
    else{
        alert("menor de idade")
    }
}


function comparado(){
    let palavra1= String(prompt("informe a primeira palavra"))
    let palavra2= String(prompt("informe a segunda palavra"))
    if (palavra1 === palavra2){
        alert("palavras iguas")
        console.log("palavras iguas")
    }
    if (palavra1 !== palavra2){
        alert("palavras desiguais")
        console.log("palavras desiguais")
    }
}
comparado()
let valorHora = Number(prompt("qual o valor da sua hora trabalhada?"))
let quantidadeHoras = Number(prompt("Quantidades de horas trabalhadas"))
let salario = valorHora * quantidadeHoras
let imposto = 0
let salarioFinal= 0
let inss = salario * 10/100
let fgts = salario * 11/100
let descontoFgts = salario - fgts
*/
function questionario() {
    let respostas_sim = 0
    let resposta_1 = (prompt("Você telefonou para a vitima?(s/n)")).toLowerCase()
    let resposta_2 = (prompt("Esteve no local do crime? (s/n)")).toLowerCase()
    let resposta_3 = (prompt("Mora perto da vítima? (s/n)")).toLowerCase()
    let resposta_4 = (prompt("Devia para a vítima? (s/n")).toLowerCase()
    let resposta_5 = (prompt("Já trabalhou com a vítima? (s/n)")).toLowerCase()

    if (resposta_1 === "s") {
        respostas_sim +=1
    }
    if (resposta_2 === "s") {
        respostas_sim +=1
    }
    if (resposta_3 === "s") {
        respostas_sim +=1
    }
    if (resposta_4 === "s") {
        respostas_sim +=1
    }
    if (resposta_5 === "s") {
        respostas_sim +=1
    }
    alert(respostas_sim)
    if (respostas_sim >= 5) {
        alert("Assasino")
    }
    else if (respostas_sim >= 3) {
        alert("Cumplice")
    }
    else if (respostas_sim == 2) {
        alert("suspeita")
    }
    else {
        alert("inocente")
    }

}
questionario()