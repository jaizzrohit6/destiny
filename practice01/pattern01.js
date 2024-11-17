//mutable code

    // let arr = [1,2]
    // let rev = arr.reverse()

//stop it from getting mutable 
    let arr = [1,2]
    let rev = [...arr].reverse()   
console.log(arr,rev)

