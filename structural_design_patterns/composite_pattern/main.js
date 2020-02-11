const Brand_order = require('./brand_order')
const Merged_order = require('./merged_order')


const behrouz = new Brand_order("behrouz",100)
const lunchbox = new Brand_order("lunchbox",140)

const firangibake = new Brand_order("firangibake",200)
const ovenstory = new Brand_order("ovenstory",250)

const merged_order = new Merged_order("meal_at_150",[behrouz,lunchbox])
const merged_order2 = new Merged_order("meal_at_200",[firangibake,ovenstory])


console.log(behrouz.name,behrouz.total())

console.log(merged_order.name,merged_order.total())
console.log(merged_order2.name,merged_order2.total())


//Tree strcuture of objects
//group of items




