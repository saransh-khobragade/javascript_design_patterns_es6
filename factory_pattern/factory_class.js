const principle = require('./principle')
const student = require('./student')
const teacher = require('./teacher')

const factory_method = (type,name,branch,salary,department) =>{
    if(type==="student"){
        return new student(name,branch)
    }else if (type==="principle"){
        return new principle(name,salary,department)
    }else if (type==="teacher"){
        return new teacher(name,branch,salary)
    }
}

module.exports = factory_method;