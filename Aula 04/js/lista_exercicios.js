/*
x=2
y=3
x_salvo=x
alert("x ="+x)
alert("y ="+y)
x=y
y=x_salvo
*/
valida=true
dia = Number(prompt("fale o dia:"))
mes = Number(prompt("em que mês estamos?"))
ano = Number(prompt("Fale o ano"))

if (dia>31){
    alert("data do dia invalida")
    valida=false
}
if(mes>12){
    alert("data do mes invalida")
    valida=false
}
if(ano>2013){
    alert("data do ano invalida")
    valida=false
}
if(valida==false){
    alert("data invalida")
}