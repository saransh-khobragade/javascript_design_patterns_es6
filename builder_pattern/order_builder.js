const Order = require('./order')

class OrderBuilder{
    constructor(name ,sales=0,price=0){
        this.name = name;
        this.sales = sales;
        this.price = price;
    }
    makePaid(price){
        this.isFree = false;
        this.price = price;
        return this;
    }
    makeCampain(){
        this.isCampain = true;
        return this;
    }
    build(){
        return new Order(this)
    }
}

module.exports = OrderBuilder