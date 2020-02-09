class Order_with_customer{
    constructor(obj){
        this.decorated_obj = {
            ...obj,
            customer:{
                id:obj.customer_id,
                name:"cust_1",
                phone_number:9168278616
            }
        }
    }
}
module.exports = Order_with_customer