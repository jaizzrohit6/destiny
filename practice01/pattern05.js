function fetchData(callback){
    setTimeout(()=>{
        const data = {message:"processed successfully"}
        callback(null,data)
    },1000)
}

fetchData((error,data)=>{
    if(error){
        console.error(error)
    }else{
        console.log(data)
    }
})







