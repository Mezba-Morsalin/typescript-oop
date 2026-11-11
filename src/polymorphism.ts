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

     calculatePay ( taxRate : number){
        return (this._salary + 3000) - this._salary * taxRate
    }
}

class Manager extends SalaryByUser {
    override calculatePay () {
        return this.salary + 5000
    }
}


class BackendDeveloper extends SalaryByUser {
    constructor (
        name : string, 
        salary : number, 
       public type : string) {
        super (name ,salary)
        this.type = type
    }

    override calculatePay (taxRate : number) {
        return (this.salary + 3000) - this.salary * taxRate
    }
}

const user = new SalaryByUser("Mezba", 24000)

const manager = new Manager("Mizan", 50000)

const backendDeveloper = new BackendDeveloper("Sabit", 20000, "Backend Developer")

console.log(user.calculatePay(0.10));
console.log(manager.calculatePay());
console.log(backendDeveloper.calculatePay(0.10));