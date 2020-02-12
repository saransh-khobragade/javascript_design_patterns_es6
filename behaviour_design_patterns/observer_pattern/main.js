const Mobile = require('./mobile');
const Order = require('./order');
const Web = require('./web');


const order_1 = new Order(12);
const order_2 = new Order(15);
const order_3 = new Order(34);
const order_4 = new Order(56);


//observers
const behrouz = new Web("behrouz",12);
const ovenstory = new Web("ovenstory",15);
const ios = new Mobile("ios",34);
const android = new Mobile("android",56);


order_1.subscribe(behrouz);
order_2.subscribe(ovenstory);
order_3.subscribe(ios)
order_4.subscribe(android)


//pushing event
order_1.change_status("cooked");
order_2.change_status("delivered");
order_3.change_status("created");
order_4.change_status("cancelled");


//Basic publisher subscriber pattern
//A event must be trigger and notify respective listener


