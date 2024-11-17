function outerFunction(outervariable){
    return function innerFunction(innervariable){
        console.log(`outer function variable ${outervariable}`)
        console.log(`inner function variable ${innervariable}`)
    }
}

let newfunction = outerFunction("outside")
newfunction("inside")