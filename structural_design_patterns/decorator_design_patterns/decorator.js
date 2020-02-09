//modify an object dynamically
//use composition instead of inheritance
//more flexible than static inheritance
//The Decorator Pattern proposes a solution to modify an object in run time, applying independent features or behaviors which can be combined and accumulated in any order.

const Order = require('./order')
const Order_with_product = require('./order_with_product')
const Order_with_customer = require('./order_with_customer')


const order_1 = new Order(1,"1/2/4",123,23)
console.log(order_1.get_data(order_1))

order_with_product = new Order_with_product(order_1)
console.log(order_1.get_data(order_with_product.decorated_obj))//order object mutuated 

order_with_product_customer = new Order_with_customer(order_with_product.decorated_obj)
console.log(order_1.get_data(order_with_product_customer.decorated_obj))//order object mutuated 

