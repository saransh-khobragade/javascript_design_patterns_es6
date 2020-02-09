const person = require('./person')

class Principle extends person{
    constructor(name,salary,department){   
        super(name)   
        this.salary = salary
        this.department = department
    }
}
module.exports = Principle;
