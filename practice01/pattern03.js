function fetchData(callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = { message:"Message processed successfully"}
            if(data){
                resolve(data)
            }
            else{
                reject(error)
            }
        },1000)
    }).then(result=> callback(null,result)).catch(err=>callback(err,null))
}
fetchData((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
