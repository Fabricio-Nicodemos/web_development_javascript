// Meu exemplo de criar uma funcao factory
function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: '10%'
    }
}
console.log(criarProduto('celular', 2000))


// Exemplo do professor ao criar uma funcao factory
function criarProduto2(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto2('Notebook', 2199.49))
