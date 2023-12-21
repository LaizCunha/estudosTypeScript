
let produto: object = {
    name: "Carlos",
    cidade: "Belém",
    idade: 40,
};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};

// Array

let dados: string[] = ["carlos", "felipe", "ana"];
let dados2: Array<string> = ["carlos", "felipe", "ana"];