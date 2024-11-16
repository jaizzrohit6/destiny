function plusMinus(arr) {
    // Write your code here
    let n = arr.length
    let posCounter = 0 
    let negCounter = 0 
    let zeroCounter = 0 
    arr.forEach(element=>{
        if(element > 0 ){
            posCounter += 1
        }else if(element === 0 ){
            zeroCounter +=1
        }else{
            negCounter += 1
        }
    })
        posCounter = (posCounter/n).toFixed(6)
        zeroCounter = (zeroCounter/n).toFixed(6)
        negCounter = (negCounter/n).toFixed(6)
        
        console.log(posCounter)
        console.log(negCounter)
        console.log(zeroCounter)
}


function plusMinusopt(arr){
    let n = arr.length
    let [pos,neg,zero] = [0,0,0]

    for(const element of arr){
        if(element > 0 ){
            pos += 1
        }else if(element === 0 ){
            neg +=1
        }else{
            zero += 1
        }
    }
    console.log((pos/n).toFixed(6))
    console.log((neg/n).toFixed(6))
    console.log((zero/n).toFixed(6))
}


