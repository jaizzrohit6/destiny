//equalize array 

function removeUniqueArray(arr){
    let newArr=[]
    for(let i = 0 ; i< arr.length;i++){
        if(newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
        else{
            if(newArr.length==0){
                newArr.push(arr[i])
            }
        }
    }
    return (arr.length -newArr.length)
}
function equalizeArray(arr){
    let obj={}
    for(let i = 0 ; i< arr.length;i++){
        let first = arr[i]
        obj[first] = (obj[first] || 0) + 1
    }
    let maxfreq = 0
    for(const key in obj){
        if(obj[key] > maxfreq){
            maxfreq = obj[key]
        }
    }
    console.log(maxfreq)
    return (arr.length -maxfreq)
}

let arr = [1 ,2, 3, 1, 2, 3, 3, 3]
console.log(equalizeArray(arr))


