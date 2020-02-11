class Order {
    constructor(data) {
        this.id = data.id, 
        this.order_date = data.order_date,
        this.order_amount = data.order_amount,

        this.order_source = data.order_source,
        this.payment_mode = data.payment_mode,
        this.order_status = data.order_status,
        this.payment_status = data.payment_status
    }
}

const order_source = ['savor', 'behrouz', 'faasos', 'ovenstory'];
const payment_mode = ['cod','online_credit_card','paytm','gpay'];
const order_status = ['delivered','out_for_delivery','created','cooked']
const payment_status = ['success','failed','pending']




//------------driver method --------------------//

const dummy_order_method = function() {

    const dummy_orders = {};

    const add = (data) => {
        dummy_orders[data.id] = new Order(data);
    }

    return {
        add: add
    }
}

const order = new dummy_order_method;

const numCourses = 10000000;

const initialMemory = process.memoryUsage().heapUsed;

for(let i = 0; i < numCourses; i++) {

    order.add({
        id: i,
        order_date:"1/22/44",
        order_amount:1223,

        order_source: order_source[Math.floor((Math.random() * 4))],
        payment_mode: payment_mode[Math.floor((Math.random() * 4))],
        order_status: order_status[Math.floor((Math.random() * 4))],
        payment_status: payment_status[Math.floor((Math.random() * 3))]
    });
}


const finalMemory = process.memoryUsage().heapUsed;


const usedMemory = ((finalMemory - initialMemory) / 1000000).toFixed(2);

console.log('used memory: ' + usedMemory + ' mb');

