// Run-length encoding (find/print frequency of letters in a string)


function frequencyLetter(str){
    let obj={}
    for(let i = 0 ; i< str.length ; i++){
        let letter = str[i]
        if(obj[letter]){
            obj[letter] +=1
        }
        else{
            obj[letter] = 1
        }
    }
    return obj
}

let str = "gdhfgggfggfgfgf"
console.log(frequencyLetter(str))