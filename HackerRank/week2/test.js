function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0
    for(let m = i; m<= j; m++){
        let rev = parseInt(m.toString().split('').reverse().join(''),10)
        let val = Math.abs((m -rev)/k)
        console.log(val)
        if(Number.isInteger(val)){
            count++
        }
    }
    console.log(count)
    return count
}

let i = 13 
let j = 45
let k = 3
beautifulDays(i,j,k)