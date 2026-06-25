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
let contagem = 0

function remover() {
    document.getElementById("paragrafo").remove();
  
    
    
}
function criarCard() {
    contagem++
    console.log(contagem)
    let Botao_delet = document.createElement('button');
    let novo_card = document.createElement("div");
    let nome_filme = document.createElement("h5");
    let genero_filme = document.createElement("p");
    let ano_filme = document.createElement("p");
    let contagem_filmes = document.createElement("spam")
    contagem_filmes.classList.add("contagem")
    novo_card.classList.add("card-body")
    nome_filme.classList.add("card-title")
    genero_filme.classList.add("card-text")
    ano_filme.classList.add("card-text")
    Botao_delet.classList.add("btn-btn-primary")
    contagem_filmes.innerText = contagem
    novo_card.id = "card_filme"
    Botao_delet.textContent = "deletar"
    nome_filme.innerText = document.getElementById("input_nome").value
    genero_filme.innerText = document.getElementById("input_genero").value
    ano_filme.innerText = document.getElementById("input_ano").value
    novo_card.append(contagem_filmes)
    novo_card.appendChild(nome_filme);
    novo_card.appendChild(genero_filme);
    novo_card.appendChild(ano_filme);
    novo_card.appendChild(Botao_delet);
    document.getElementById("area_filme").appendChild(novo_card)
    function deletar(){
        document.getElementById("card_filme").remove();
        contagem -= 1;
        console.log(contagem)
    }
    Botao_delet.addEventListener('click', () => {deletar();});
    getElementById("area_filme").appendChild(novo_card);


}
