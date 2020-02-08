const factory_method  = require('./factory_class')

const saransh = factory_method("student","saransh","cse")
const arjun = factory_method("teacher","arjun","cse",120000)
const somuya = factory_method("principle","soumya",null,120227272,"NIT")

console.log(saransh)
console.log(arjun)
console.log(somuya)