const course_builder = require('./order_builder')

const course_1 = new course_builder(1,10,"sodexo").order_date().customer_id().build()
const course_2 = new course_builder(2).build()

course_1.toString()
course_2.toString()