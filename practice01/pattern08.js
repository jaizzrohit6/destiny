let a = [10,11,4]
let b = [4,11,12]

function compareTest(a,b){
    countera = 0 
    counterb = 0
    newarr= []
    for(let i = 0 ; i < a.length;i++){
        if(a[i] > b[i]){
            countera++
        }
        else if(a[i] < b[i]){
            counterb++
        }
    }
    newarr.push(countera,counterb)
    return newarr
}

console.log(compareTest(a,b))