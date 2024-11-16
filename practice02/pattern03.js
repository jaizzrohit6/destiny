let salaries = [4000, 3000, 2000, 1000, 5000, 4500, 3000]
let removedup=[]
salaries.filter(element=>{
    if(!removedup.includes(element)){
        removedup.push(element)
    }
})

console.log(removedup)

// const arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 8];
let arr = [4000, 3000, 2000, 1000, 5000, 4500, 3000]
const duplicates = arr.reduce((acc, num, i, array) => {
  if (array.indexOf(num) !== i && !acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(duplicates); // Output: [2, 3, 8]



const duplicate = arr.reduce((acc,num,i,array)=>{
    if(array.indexOf(num) !== i && !acc.includes(num)){
        acc.push(num)
    }
    return acc
},[])

console.log(duplicate)

const sum = arr.reduce((total,currentVal)=>{
    return total+currentVal
},0)

console.log(sum)