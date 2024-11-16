//Sort an array of 0's, 1's and 2's in linear time complexity

function getSorted(arr){
    let low = mid = 0 
    let high = arr.length -1    
    
    while(mid <= high){

        if(arr[mid] == 0){
            [arr[low] , arr[mid]] = [arr[mid] , arr[low]]
            low += 1
            mid += 1
        }
        if(arr[mid] == 1){
            mid +=1
        }
        if(arr[mid] == 2){
            [arr[mid],arr[high]] = [arr[high] , arr[mid]]
            high -=1
        }
    }
    return arr
}

let arr = [2,0,0,1,2,1,1,2,0,0]
console.log(getSorted(arr))
