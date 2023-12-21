// Decorators 

function exibirNome(target: any){
    console.log(target);
}

@exibirNome
class Funcionario {};

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version})
    };
};


@apiVersion("1.10")
class Api{
    name: string;

    constructor(name: string) {
        this.name = name;
    }
};

const api = new Api("produtos");
console.log(api.name);