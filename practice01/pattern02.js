function checkAnagram(str1,str2){
    let lookup = {}
    for(let i = 0 ; i < str1.length ; i++){
        let letter = str1[i]
        lookup[letter] = (lookup[letter] || 0) + 1 
    }
    for(let i = 0 ; i < str2.length ; i++){
        let letter = str2[i]
        if(!lookup[letter]){
            return false
        }
        else{
            lookup[letter] -= 1
        }
    }
    console.log(lookup)
    return true
}

let str1 = "maximum"
let str2 = "mummaxi"
console.log(checkAnagram(str1,str2))