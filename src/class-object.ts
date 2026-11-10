// Class Object

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



// Recap Class Object


class SecondPlayers {
    name : string;
    goals : number;
    isRetired : boolean

    constructor (name : string, goals : number , isRetried : boolean) {
        this.name = name;
        this.goals = goals;
        this.isRetired = isRetried
    }
}

const player3 = new SecondPlayers("Ronaldo", 208 , true);
const player4 = new SecondPlayers("Messi" , 135, true);

console.log(player3);
console.log(player4);