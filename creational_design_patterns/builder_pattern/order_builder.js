const Order = require('./order')

class OrderBuilder{
    constructor(id ,amount=0,payment_mode="cod"){
        this.id = id;
        this.amount = amount;
        this.payment_mode = payment_mode;
    }
    order_date(){
        this.order_date = true;
        return this;
    }
    customer_id(){
        this.customer_id = true;
        return this;
    }
    build(){
        return new Order(this)
    }
}

module.exports = OrderBuilder