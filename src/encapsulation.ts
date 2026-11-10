class User {
    constructor (
        public name : string,
        private _age : number,
        private _salary : number ) {
    }
    
    get salary () : number {
        return this._salary
    }

    get salaryWithBonus () : number {
        return this._salary + 7000
    }

    set setSalary (newSalary : number)  {

        if (newSalary < 0) {
            throw new Error("Salary Can't Received to Negative Currency")
        }

        this._salary = newSalary
    }
}

const user1 = new User("Mezba", 24, 15000);

user1.setSalary = 56000

console.log(user1.salaryWithBonus);