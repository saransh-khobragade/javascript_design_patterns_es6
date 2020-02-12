class Web{
    constructor(name,id){
        this.name = name
        this.id = id;
    }

    notify(order_status){
        console.log(`you ${this.name} order with id ${this.id} status changed to ${order_status}`);
    }
}

module.exports = Web;