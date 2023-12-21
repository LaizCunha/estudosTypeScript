// Classes e Subclasses
// Modificadores de acesso

class Character {
    protected name?: string;
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    public attack(): void {
        console.log(`Attack with ${this.stregth}`);
    }
}

class Magician extends Character {

    magicPoints: number;

    constructor(
        name: string, 
        stregth: number, 
        skill: number, 
        magicPoints: number) {        
            super(name, stregth, skill);
            this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu", 10, 98);
console.log(p1);
p1.attack();

const p2 = new Magician("Mago", 11, 190, 55);
console.log(p2);