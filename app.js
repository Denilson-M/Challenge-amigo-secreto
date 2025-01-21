let amigos = [];


function adicionarAmigo()
{
    let nome = document.querySelector("input").value;

    if(nome == "")
    {
        alert("Por favor, insira um nome.");
    }
    else
    {
        amigos.push(amigos);
        limparCampo();
    }
}

function sortearAmigo()
{
    alert("O botao Sortear foi clicado");
}

function limparCampo()
{
    nome = document.querySelector("input");
    nome.value = "";
}