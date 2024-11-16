function reverseArray(arr) {
    // let val = a[0]
    // let arr = a[1]
    let newArr = []
    console.log(arr.length)
    // Write your code here
    for(let i = arr.length-1; i >= 0 ; i--){
        console.log(arr[i])
        newArr.push(arr[i])
    }
    return newArr
}

let a = [5,2,3,7]
console.log(reverseArray(a))


// Output : "1:2:3:4:5:6:7:8:9:10"
 
let arr =  [ 1, 2, [ 3, 4], 5, 6, [ 7, [ 8, 9], 10]]
 
let newArr = []
let finalArr = []
let mySet = new Set()
function testArray(arr){
    for(let i = 0 ; i < arr.length;i++){
        if(Array.isArray(arr[i])){
           testArray(arr[i])
        }
        else{
            newArr.push(arr[i])
        }
    }
    finalArr = newArr.join(":")
    return finalArr
}

console.log(testArray(arr))