let titleClick = document.getElementById('title');
let board = document.getElementById('board');

// O () vazio é uma função anônima
// titleClick.addEventListener('click',()=>{
//     // alert ("Deu certo");
//     // O fetch é uma técnica ajax que faz uma solicitação HTTP (GET ou POST). O fetch devovle os dados como se fosse o parâmetro de uma função
//     // O fetch não sabe que está recebendo um json, preciso informar no código
//     fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=0e9ebb13f51846bab05d8297e489de4a")
//     .then((result)=>{
//         return result.json();
//         // o json coom a seta indica um parâmetro - como é apenas 1, não preciso colocar entre ()
//     }).then(json=>{
//         console.log(json.articles);
//     })
// })

// // Sintaxe com arrow function
titleClick.addEventListener('click',()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=0e9ebb13f51846bab05d8297e489de4a")
.then(result=> result.json())
.then(json=>{
        console.log(json.articles);
        show(json.articles);
    })
})

// listaNoticias é parâmetro da função show
let show = listaNoticias =>{
    // for(let noticia of listaNoticias)
    listaNoticias.forEach(function(noticia,posicao){

        // Para imprimir o valor de uma variável, coloco ${}
        // let saudacao = `Olá, ${nome}`
        let card = `
        <div class="card" style="width: 18rem;">
            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title">${noticia.title}</h5>
                <p class="card-text">${noticia.description}</p>
                <a href="#" class="btn btn-dark">Veja mais</a>
            </div>
        </div>`
        
        // innerHTML é um atributo
        // Faz o mesmo que board.innerHTML = board.innerHTML +card;
        board.innerHTML += card;
    })

}

// Arrow functions permitem uma sintaxe mais curta:
// Antes:
    // hello = function() {
    //     return "Hello World!";
    // }
// Com arrow fucntion  
    // hello = () => {
    //     return "Hello World!";
    // }
// Arrow Functions retornando valores:
    // hello = () => "Hello World!";

    // ()=>"Solução direta sem return";
    // ()=>{
    //     funções
    //     return "Mais de uma função, preciso ter o return"
    // }
    // parametro=>{

    // }
    // (parametro1, parametro2)=>"Solução"