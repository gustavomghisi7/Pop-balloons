var total = 0;

// Criar balão
function criarBalao() {	
	var balao = document.createElement("div");
	balao.setAttribute("class", "balao");

	var x = Math.floor(Math.random() * 600);
	var y = Math.floor(Math.random() * 400);
	
	balao.setAttribute("style", "left: " + x + "px;top: " + y + "px;");
	balao.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(balao);
}

// Estourar o balão
function estourar(objeto) {
	document.body.removeChild(objeto);
	
	total++;
	var score = document.getElementById('total');
	score.innerHTML = "Balões estourados: " + total;
}

// Carregar mais balão
function carregarJogo() {
	setInterval(criarBalao, 1000);
}