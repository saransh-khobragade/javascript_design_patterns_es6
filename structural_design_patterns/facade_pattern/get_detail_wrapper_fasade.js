//The building block of a facade is common interface
//No matter which resource you want to query, you should only use one method

const Order = require('./order')
const Customer = require('./customer')
const driver = require('./driver')

class Get_detail_wrapper_fasade {
  
  constructor(type){
    this.type=type
  }
  
  _find_order(id) {
    const db = new Order();
    return db.fetch(id);
  }

  _find_customer(id) {
    return new Customer(id);
  }

  _find_driver(id) {
    return driver(id);
  }

  get _error() {
    return { status: 404, error: `No item with this id found` };
  }

  _tryToReturn(func, id) {
    const result = func.call(this, id);

    return new Promise((ok, err) => !!result
      ? ok(result)
      : err(this._error));
  }

  get(id){
    switch (this.type) {
      case "order": {
        return this._tryToReturn(this._find_order, id);
      }

      case "customer": {
        return this._tryToReturn(this._find_customer, id);
      }

      case "driver": {
        return this._tryToReturn(this._find_driver, id);
      }

      default: {
        throw new Error("No type set!");
      }
    }
  }

}

module.exports = Get_detail_wrapper_fasade

