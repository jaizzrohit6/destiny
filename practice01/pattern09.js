// let arr = [1,2,3,4,5]

// let sum = arr.reduce((acc,val)=>{
//     return acc + val
// },0)

// console.log(sum)

let arr = [3,
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]]


let n = arr[0]
let matrix = arr.slice(1)
console.log(matrix)
let primary = 0
let secondary = 0


for(let i = 0 ; i < n ; i++){
    primary += matrix[i][i]
    secondary += matrix[i][n-i-1]
}
let result = Math.abs(primary-secondary
)
console.log(result)