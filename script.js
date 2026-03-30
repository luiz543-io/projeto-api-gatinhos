async function carregarGatinho() {
    const elementoImagem = document.getElementById('foto-gato');
    const elementoErro = document.getElementById('erro');

    try {
        // Buscando na API (o fetch que o professor pediu)
        const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
        const dados = await resposta.json();

        // Pegando o link da imagem dentro do JSON
        elementoImagem.src = dados[0].url;
        elementoImagem.style.display = 'inline-block';
    } catch (err) {
        elementoErro.innerText = "Ops! Ocorreu um erro ao carregar o gatinho.";
    }
}

// Chama a função assim que a página abre
carregarGatinho();