const person =  require('./person')

class Student extends person{
    constructor(name,branch){   
        super(name)   
        this.branch = branch  
    }
}

module.exports = Student;
