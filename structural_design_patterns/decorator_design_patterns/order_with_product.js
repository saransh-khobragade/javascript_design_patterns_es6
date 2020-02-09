class Order_with_product{
    constructor(obj){
        this.decorated_obj = {
            ...obj,
            product_id:{
                id:obj.product_id,
                name:"prod_1",
                price:1222
            }
        }
    }
}
module.exports = Order_with_product