function maxArraySum(arr , k){
    let maxSum = 0 
    let windowSum = 0
    if(arr.length < k){
        return "array is smaller in size"
    }
    //first windowsum
    for(let i = 0 ; i< k ; i++){
        windowSum +=arr[i]
    }
    maxSum = windowSum

    for(let i=k ; i< arr.length ; i++){
        windowSum += arr[i] - arr[i-k]
        maxSum = Math.max(maxSum,windowSum)
    }
    return maxSum
}


let arr = [2,1,6,3,7,9,0,2,4]
let k = 2
console.log(maxArraySum(arr,k))