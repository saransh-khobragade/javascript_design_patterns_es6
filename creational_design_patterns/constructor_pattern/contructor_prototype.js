const abc = function(a,b){
    this.a=a;
    this.b=b;
}
abc.prototype.sum = function(){
    return this.a+this.b
}

//function copies wont be created every time a new object gets created
//saves object memory

const o = new abc(3,4)
console.log(o.sum())

