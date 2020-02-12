const Cod = require('./payment_modes/cod')
const Gpay = require('./payment_modes/gpay')
const Phonepay = require('./payment_modes/phonepay')

class Payment_gateway{
    static cod(amount){
        return new Cod(amount)
    }
    static gpay(amount){
        return new Gpay(amount)
    }
    static phonepay(amount){
        return new Phonepay(amount)
    }
}
module.exports = Payment_gateway
