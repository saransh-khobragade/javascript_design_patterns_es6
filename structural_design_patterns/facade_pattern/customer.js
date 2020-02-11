class Customer {
    constructor(id) {
        return this.details.find(item => item.id === id);
    }

    get details() {
        return [
            { id: 1, name: "Saransh" },
            { id: 2, name: "Vivek" },
            { id: 3, name: "Neha" }
        ];
    }
}

module.exports = Customer
