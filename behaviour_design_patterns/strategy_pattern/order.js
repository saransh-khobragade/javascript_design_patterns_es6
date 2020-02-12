class Order{
    constructor(id,product_id,payment_mode,amount){
        this.id = id
        this.product_id = product_id
        this.payment_mode = payment_mode
        this.amount = amount
    }
}

module.exports = Order