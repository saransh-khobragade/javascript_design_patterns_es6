const database = ()=>{
    const config="annsndkjsdk"
    
    return {
        select:(data)=>{
            console.log(data.id,data.title,data.auther,config)
        }
    }

}

module.exports = database()