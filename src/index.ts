
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

// Array Multiplos tipos

let infos: (string | number)[] = ["felipe", 30, "carlos", 40];

// Tuplas

let boleto: [string, number, number] = ["agua conta", 150.8, 47756430];

//Datas

let aniversario:Date = new Date("2022-12-01 05:00");
console.log(aniversario.toDateString())



