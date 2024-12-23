function viralAdvertising(n) {
    let ans = 0  
    let shared =5
    for(let i = 0 ; i< n;i++){
        ans +=  Math.floor(shared/2)
        shared = Math.floor(shared/2)*3
    }
    return ans
}
