const Get_detail_wrapper_fasade = require('./get_detail_wrapper_fasade')

const order = new Get_detail_wrapper_fasade("order");
order.get(2)
    .then(data => console.log(data))
    .catch(e => console.error(e));

const customer = new Get_detail_wrapper_fasade("customer");
customer.get(1)
    .then(data => console.log(data))
    .catch(e => console.error(e));

const driver = new Get_detail_wrapper_fasade("driver");
driver.get(3)
    .then(data => console.log(data))
    .catch(e => console.error(e));

// A single method used for getting details of different complex entities we dont need to know each entities complex logic