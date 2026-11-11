// inheritance

class SalaryByUser {
    constructor (
       public name : string, 
       protected _salary : number) {
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
    constructor (
       public totalMemberCount : number , 
        name : string, 
        salary : number) {
        super (name, salary)
        this.totalMemberCount = totalMemberCount
    }

    describeManagerWork () : string {
        return `Manager ${this.name} manages ${this.totalMemberCount} peoples`
    }

    describeManager () : string {
        return `${this.name} is a Manager and Salary is ${this._salary}`
    }
}

const manager = new Manager(25, "Sobuj", 52000);

console.log(manager.describeManagerWork());
console.log(manager.describeManager());