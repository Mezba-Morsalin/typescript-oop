class Player {
    name : string;
    goals : number;

    constructor (name : string, goals : number) {
        this.name = name,
        this.goals = goals

    }
}

const player1 = new Player("Neymar", 80)
const player2 = new Player("Raphinha", 12)

console.log(player1);
console.log(player2);