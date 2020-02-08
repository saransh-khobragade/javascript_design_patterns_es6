const db = require('./database')

class Course{
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.auther = data.auther
    }

    DBquery(){
        db.select(this)
    }
}

module.exports = Course;