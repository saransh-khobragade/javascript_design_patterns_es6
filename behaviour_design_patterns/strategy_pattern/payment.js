const Payment_gateway = require('./payment_gateway/payment_gateway')
class Payment{
    constructor(mode="cod"){
        this.mode = Payment_gateway[mode]
    }
    change_strategy(new_mode){
        this.mode = Payment_gateway[new_mode]
    }
}

module.exports = Payment