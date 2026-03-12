console.log("O JavaScript está funcionando!");

// botão comprar
let botaoComprar = document.getElementById("comprarBtn");

botaoComprar.addEventListener("click", function() {
    alert("Produto adicionado ao carrinho!");
});

// botão ver produtos
let botaoProdutos = document.getElementById("verProdutos");
let produtos = document.getElementById("produtos");

botaoProdutos.addEventListener("click", function() {

    if (produtos.style.display === "none") {
        produtos.style.display = "block";
    } else {
        produtos.style.display = "none";
    }

});
