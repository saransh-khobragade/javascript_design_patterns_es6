class Merged_order{
    constructor(name,brands){
        this.name = name
        this.brands = brands
    }
    total(){
        return this.brands.reduce((x,y)=>x+y.price,0)
    }
}

module.exports = Merged_order