class Player {
    name : string;
    goals : number;
     isRetried : boolean

    constructor (name : string, goals : number, isRetried :  boolean ) {
        this.name = name;
        this.goals = goals;
        this.isRetried = isRetried;
    }
}

const player1 = new Player("Neymar", 80, true)
const player2 = new Player("Raphinha", 12, false)

console.log(player1);
console.log(player2);