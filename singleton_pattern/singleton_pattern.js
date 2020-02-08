var singleton = (function(){
    var obj;
    function createInstance(){
        obj = new Object({name:'Javascript'});
        return obj;
    }
    return{
        getInstance:function(){
            if(!obj){
                obj = createInstance()
            }
            return obj;
        }
    }
})();

const test1 = singleton.getInstance()
const test2 = singleton.getInstance()

if(test1 === test2){
    console.log("Same object/reference returned")
}else{
    console.log("Oops")
}