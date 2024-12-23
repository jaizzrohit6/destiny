function saveThePrisoner(n, m, s) {
    let total = (s -1 + m-1)%n
    console.log("before::",total)
    total = Math.floor(total)
    console.log("after",total)
    return total + 1
}

let n = 5 //number of prisioner
let m = 11 // no of sweets
let s = 2 //starting points
console.log(saveThePrisoner(n,m,s))