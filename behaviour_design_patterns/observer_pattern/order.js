class Order{
        constructor(id) {
            this.id = id;
            this.status = "created"
            this.subscribers = [];
        }


        subscribe(observer){
            this.subscribers.push(observer);
        }


        change_status(order_status){
            this.status = order_status
            this.subscribers.forEach(observer => observer.notify(order_status ))
        }

}

module.exports = Order;