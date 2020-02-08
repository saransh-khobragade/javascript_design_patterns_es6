const person = require('./person')

class Teacher extends person{
    constructor(name,branch,salary){   
        super(name)   
        this.branch = branch  
        this.salary = salary
    }
}
module.exports = Teacher;
