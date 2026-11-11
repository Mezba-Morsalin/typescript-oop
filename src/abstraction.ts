// abstract

abstract class SalaryByUser {
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

    abstract calculateSalary () : number
}

class Manager extends SalaryByUser {
    calculateSalary () {
        return this.salary + 5000
    }
}
class Developer extends SalaryByUser {
    calculateSalary () {
        return this.salary + 3000
    }
}