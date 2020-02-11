class Order {
    get details() {
        return [
            { id: 1, brand: "behrouz" },
            { id: 2, brand: "ovenstory" },
            { id: 3, brand: "faasos" }
        ];
    }

    fetch(id) {
        return this.details.find(item => item.id === id);
    }
}

module.exports = Order