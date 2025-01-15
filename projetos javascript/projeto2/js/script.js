const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: 'image.jpg',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'short',
        img: 'image.jpg',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'sapatos',
        img: 'image.jpg',
        quantidade: 0
    }
]


/*function inicializarloja() {
    
} */

/*var inicializarloja = function() {

} */

inicializarloja = () => {
    const containerProdutos = document.getElementById('produtos');
    const containerCarrinhos = document.getElementById('carrinhos');

    /*for(var i = 0; i <= 2; i++) {
        containerProdutos.innerHTML += `
        <div class"produtos-single">
            <img src="${items[i].img}"> 
            <p>${items[i].nome}</p>
            <a href="" id="${items[i].id}"> Adicionar no carrinho</a>
        </div>

        `;
    } */



    /*items.map(val => res = console.log(val.nome));*/



    /*items.map(function(val) {
        console.log(val.nome);
    })*/




    items.map((val) => {
        containerProdutos.innerHTML += `
        <div class"produtos-single">
            <img src="${val.img}">
            <p>${val.nome}</p>
            <a href="#" id"${val.id}">Adicionar no carrinho</a>
        <div/>

        `;
    })

}

inicializarloja();


atualizarcarrinho = () => {

}


let links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i ++) {
    links[i].addEventListener('click', () => {
        let key = this.getAttribute('key');
    })
}



