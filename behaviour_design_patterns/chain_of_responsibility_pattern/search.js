const Content = require('./content');
class Search{

    constructor(name, data = []){
        this.name = name;
        this.data = data;

        //content structuring
        const category = new Content('category',this.content_structuring(data.category)) ;
        const brands = new Content('brands', this.content_structuring(data.brands));
        const collection = new Content('collection', this.content_structuring(data.collection));
        const product = new Content('product', data.product);

        //Chaining responsibility/content to get search
        //linked list
        category.setNext(brands);
        brands.setNext(collection);
        collection.setNext(product);


         this.start = category;
    }

    find(itemName){
        return this.start.search(itemName);
    }
    
    content_structuring(data){
        const arr_of_arr = data.map((x)=>x.product)
        return [].concat.apply([], arr_of_arr);
    }
}

module.exports = Search;