const course_builder = require('./order_builder')

const course_1 = new course_builder('Design patterns').makePaid(100).makeCampain().build()
const course_2 = new course_builder('Design Pattern').build()

course_1.toString()
course_2.toString()