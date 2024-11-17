// 17-11-2024
`
question Reverse Integer 
example - 123 = 321 , -123 = -321  , 120 =  21
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
`

function reverseInteger(val){
    val = val.toString()
    let result = ""
    let isNegative = val[0] === "-"

    for(let i = val.length-1 ; i >= (isNegative ? 1 : 0 ) ; i--){
        result += val[i]
    }
    result = parseInt(result)
    if(isNegative){
        result = -result
    }
    return result
}
let val = -122
console.log(reverseInteger(val))