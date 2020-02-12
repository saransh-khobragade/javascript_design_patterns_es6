// selecting an algorithm at runtime
// this selection can be triggered from anywhere before execution of function we can set it execution strategy in real time

const Order = require('./order')
const Payment = require('./payment')

const payment = new Payment()

const order = new Order(1,223,payment,12223)

console.log(order)

//---------------some order validation -----------//


//At checkout 

payment.change_strategy("phonepay")//at runtime decided which payment method algo should run in future

//at placeorder
const redirect_url = order.payment_mode.mode().redirect_url
order.payment_mode = order.payment_mode.mode().payment_mode

console.log(redirect_url)
console.log(order)


