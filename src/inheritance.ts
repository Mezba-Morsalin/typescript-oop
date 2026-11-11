// inheritance

class SalaryByUser {
    constructor (
       public name : string, 
       private _salary : number) {
    }

    get salary () : number {
        return this._salary
    }

    get setBonus () : number {
        return this._salary + 10000
    }

    set setSalary (newSalary : number) {

        if (newSalary < 0 ) {
            throw new Error("Salary Doesn't Accepted in Negative Value")
        }
        this._salary = newSalary
    }

    describe() : string {
        return `${this.name} Salary is ${this._salary}`
    }
}

const userOne = new SalaryByUser("Mezba", 20000)

// console.log(userOne.describe());

class Manager extends SalaryByUser{
    totalMemberCount : number;
    constructor (totalMemberCount : number , name : string, salary : number) {
        super (name, salary)
        this.totalMemberCount = totalMemberCount
    }
}

const manager = new Manager(3, "Sobuj", 52000);

console.log(manager);