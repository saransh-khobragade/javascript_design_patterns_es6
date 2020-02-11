class Order{
    constructor(id,order_date,amount,product_id){
        this.id = id
        this.order_date = order_date
        this.amount = amount
        this.product_id = product_id
    }
    get_data(obj){
        return JSON.stringify(obj)
    }
}
module.exports = Order