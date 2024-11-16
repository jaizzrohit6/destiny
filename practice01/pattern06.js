let arr = [1,3,5,5,1,1,1,5,1]

function removeDup(arr){
    let newarr = []
    arr.filter((element)=>{
        if(!newarr.includes(element)){
            newarr.push(element)
        }
    })
    return newarr
}

console.log(removeDup(arr))

arr = [8,1,2]

function largestValue(arr){
    const max = arr.reduce((accumulator,currentValue)=>{
        return Math.max(accumulator,currentValue)
    },-Infinity)
    return max
}

console.log(largestValue(arr))