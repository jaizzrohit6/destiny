
//function currrying
function sum(x){
    return function sum(y){
        return function sum(z){
            return function(){
                return x + y + z
            }
        }
    }
}

console.log(sum(4)(5)(6)())