
//Questao 1
const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontraLivroPorId(id){
    return biblioteca.find(livro => livro.id === id) || null;
}

// Encontra um livro com ID existente
const livroEncontrado1 = encontraLivroPorId(2);
console.log("Livro Encontrado (ID 2):");
console.log(livroEncontrado1);

// Encontra um livro com ID inexistente
const livroEncontrado2 = encontraLivroPorId(4);
console.log("\nLivro Encontrado (ID 4):");
console.log(livroEncontrado2);

//Questao 2
//
const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtrarFilmesPorAno(ano){
    return catalogoFilmes.filter(filme => filme.anoLancamento === ano);
}

// Encontra um livro com ID inexistente
const filme = filtrarFilmesPorAno(2010);
console.log("\nFilmes do ano 2010:");
console.log(filme);

//Questao 3
//
// filtrarOrdenarProduto
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
];

// Função para filtrar e ordenar produtos por preço
function filtrarOrdenarProdutosPorPreco(maxPreco) {
    const produtosFiltrados = listaProdutos.filter(produto => produto.preco <= maxPreco);
    return produtosFiltrados.sort((a, b) => a.preco - b.preco);
}

const produtosAte50 = filtrarOrdenarProdutosPorPreco(50.00);
console.log("Produtos com preço até 50.00 (ordenados por preço crescente):");
console.log(produtosAte50)


//Questao 4
//
// ordenarAnimais
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
];

// Função para ordenar animais com base na função de comparação fornecida
function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

// Função de comparação para ordenar por idade de forma crescente
function compararIdadeCrescente(a, b) {
    return a.idade - b.idade;
}

// Ordena os animais por idade de forma crescente e imprime no console
const animaisOrdenadosCrescente = ordenarAnimais(compararIdadeCrescente);
console.log("Animais Ordenados por Idade (Crescente):");
console.log(animaisOrdenadosCrescente);

// Função de comparação para ordenar por idade de forma decrescente
function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade;
}

// Ordena os animais por idade de forma decrescente e imprime no console
const animaisOrdenadosDecrescente = ordenarAnimais(compararIdadeDecrescente);
console.log("\nAnimais Ordenados por Idade (Decrescente):");
console.log(animaisOrdenadosDecrescente);


//Questao 5
//
// acessarObjetoAninhado
const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
];

// Função para encontrar um funcionário por ID em qualquer departamento
function encontrarFuncionarioPorId(id) {
    for (const departamento of departamentos) {
        const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
        if (funcionarioEncontrado) {
            return funcionarioEncontrado;
        }
    }
    return null;
}

// Encontra um funcionário com ID existente e imprime no console
const funcionarioEncontrado1 = encontrarFuncionarioPorId(201);
console.log("Funcionário encontrado (ID 201):");
console.log(funcionarioEncontrado1);

// Encontra um funcionário com ID inexistente e imprime no console
const funcionarioEncontrado2 = encontrarFuncionarioPorId(103);
console.log("\nFuncionário encontrado (ID 103):");
console.log(funcionarioEncontrado2)
