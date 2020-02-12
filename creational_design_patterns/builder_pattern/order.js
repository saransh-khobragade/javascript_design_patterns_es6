class Order{
    constructor(builder){
        this.id = builder.id;
        this.amount = builder.amount || 0;
        this.payment_mode = builder.payment_mode;
        this.order_date = builder.order_date? "1/2/3":null
        this.customer_id = builder.customer_id;
    }
    toString(){
        return console.log(JSON.stringify(this))
    }
}

module.exports = Order

//