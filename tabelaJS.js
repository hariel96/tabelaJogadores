var hariel = {
    nome: "Hariel",
    vitorias: 5,
    empates: 4,
    derrotas: 2,
    pontos: 0
};

var rafael = {
    nome: "Rafael",
    vitorias: 2,
    empates: 4,
    derrotas: 5,
    pontos: 0
};

hariel.pontos = calculaPontos(hariel);
rafael.pontos = calculaPontos(rafael);

function calculaPontos(jogador){
    var pontos =  jogador.vitorias*3 + jogador.empates;
    return pontos;
};

function calculaPontosForm(jogador){
    var pontos =  jogador.vitorias*3 + parseInt(jogador.empates);
    return pontos;
};

var jogadores = [];
jogadores.push(hariel, rafael);

exibirJogadores(jogadores);

function exibirJogadores(jogadores){
    var html = "";
    for(i = 0; i< jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";
        html += "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>";
        html += "<td><button onClick='adicionarEmpate("+i+")'>Empate</button></td>";
        html += "<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td></tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
}

var botaoAdicionar = document.querySelector("#adicionar-jogador");

botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
    var form = document.querySelector("#myForm");
	var jogador = obtemJogador(form);	
    jogadores.push(jogador);
    exibirJogadores(jogadores);
    form.reset();
});


function obtemJogador(form){
    var jogador = {
        nome: form.nome.value,
        vitorias: form.QtdVitorias.value,
        empates: form.QtdEmpates.value,
        derrotas: form.QtdDerrotas.value,
        pontos: 0
    };
    jogador.pontos = calculaPontosForm(jogador);
    console.log(jogador);
    return jogador;
};



function adicionarVitoria(i){
    jogadores[i].vitorias++;
    jogadores[i].pontos +=3;
    exibirJogadores(jogadores);
};

function adicionarEmpate(i){
    jogadores[i].empates++;
    jogadores[i].pontos++;
    exibirJogadores(jogadores);

};


function adicionarDerrota(i){
    jogadores[i].derrotas++;
    exibirJogadores(jogadores);

};


