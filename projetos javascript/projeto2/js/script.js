const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: 'image.jpg',
        quantidade: 0,
    },

    {
        id: 1,
        nome: 'short',
        img: 'image.jpg',
        quantidade: 0,
    },

    {
        id: 2,
        nome: 'sapatos',
        img: 'image.jpg',
        quantidade: 0,
    },

]

function inicializarLoja() {
    var containerProdutos = window.document.getElementById('produtos');
    for(i = 0; i <= 2; i++) {
        containerProdutos.innerHTML += `
    
        <div class="produtos-single">
            <img src="${items[i].img}">
        </div>
        <p>${items[i].nome}</p>
        <a class="link" key="${items[i].id}" href="#">Adicionar no carrinho</a>

        `;
    }
}

inicializarLoja();


function atualizarCarrinho() {
    console.log(items)
}

var links = window.document.getElementsByClassName('link')

    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(){
            let key = this.getAttribute('key');
            items[key].quantidade++;
            atualizarCarrinho();
            return false;
        })
    }