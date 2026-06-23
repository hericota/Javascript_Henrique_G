function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);

    if (idade >= 18) {
        document.getElementById("resultado").innerText = "Você é maior de idade.";
    }
    else if (idade >= 0) {
        document.getElementById("resultado").innerText = "Você é menor de idade.";
    }
    else {
        document.getElementById("resultado").innerText = "Idade inválida.";
    }


}
function trocarImagem() {
    document.getElementById("imagem").src = "img/imagem2.jpg";
}


function esconderTexto() {
    document.getElementById("texto").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("texto").style.display = "block";
}


function criarParagrafo() {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";
    novoParagrafo.id = "paragrafo"
    document.getElementById("area").appendChild(novoParagrafo);

}
function remover() {
        document.getElementById("paragrafo").remove();
}

