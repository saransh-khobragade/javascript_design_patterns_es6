class Content {

    constructor(name,  content = []){
        this.name = name;
        this.content = content;

        this.next = null;
    }


    setNext(content){
        this.next = content;
    }

    search(itemName){
        const index = this.content.map(item => item.name).indexOf(itemName);
        const found = this.content[index];
        if(found){
            return {
                name: found.name,
                price: found.price            }
        } else if(this.next) {
            return this.next.search(itemName);
        } else {
            return `We do not have ${itemName} course`
        }
    }

}

module.exports = Content;