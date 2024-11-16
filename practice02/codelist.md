select max(a.Salary),a.Deptno from Employee a join (select MAX(salary) salary 
from Employee group by Deptno) b on a.Salary < b.salary group by a.Deptno
============================================================
function reverseArray(array,start,end){
  while(start < end ){
    let temp = array[start]
    array[start] = array[end]
    array[end] = temp
    start++
    end--  
  }
  return array
}
let arr = [4,1,2,7,9,3]
let start = 0
let end = arr.length-1
console.log(reverseArray(arr,start,end))



===================================================================
let str = "Hello"

function findStringRep(str){
  let obj={}
  for(let i =0;i<str.length;i++){
    if(Object.keys(obj).includes(str[i])){
      obj[str[i]] =  obj[str[i]] + 1
      continue
    }
    obj[str[i]] = 1
  }
  return obj
}
console.log(findStringRep("Hellllllooooooo"))
====================================================================
var http = require('http');  
var url = require('url');  
  
http.createServer(function (req, res) {  
    
    var queryString = url.parse(req.url, true);  
    console.log(queryString);  
    
}).listen(4200); 

=====================================================================
console.log("0 || 1 = "+(0 || 1));  //1
console.log("1 || 2 = "+(1 || 2));  //1
console.log("0 && 1 = "+(0 && 1));  //0
console.log("1 && 2 = "+(1 && 2));  //2

console.log(false == '0')  // true
console.log(false === '0') //false
========================================================================

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz
==========================================================================
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

//answer
"122"
"32"
"02"
"112"
"NaN2"
NaN
============================================================================
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}

==============================================================================
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
====================================================================================
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
setIntervl(() => console.log('setIntervl'));
process.nextTick(() => console.log('nextTick'));
console.log('current event loop');

//answer

current event loop
nextTick
timeout
immediate

=======================================================================================
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log("foooooo1",foo1())
console.log("foooooo2",foo2())

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);


function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

==============================================================================================
var myObject = {
  foo: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo);
      console.log("outer func:  self.foo = " + self.foo);
      (function() {
       // foo  = "newbar"
          console.log("inner func:  this.foo = " + this.foo);
          console.log("inner func:  self.foo = " + self.foo);
      }());
  }
};
myObject.func();


============================================================================================
: Given two strings, return true if they are anagrams of one another  
: Check if a given string is a palindrome. Case sensitivity should be taken into account.  
==================================================================================================
function mul (x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x * y * z;
    };
  };
}

========================================================================================================
//remove duplicate from array 

var obj = {
  a : "hello",
  b : 42
}

var b = "a"
console.log(b)
console.log(obj[b] , obj["b"])

// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

let dupArray = new Set(array)
console.log("duppp=======",dupArray)
console.log(Array.from(new Set(array))) // [1, 2, 3, 5, 9, 8]

//es5

console.log(uniqueArray(array))
function uniqueArray(array){
  let hasMap = {}
  let noDupArray = []
  for(let i =0 ; i < array.length ; i++) {
      if(!hasMap.hasOwnProperty(array[i])){
        hasMap[array[i]] = 1
        noDupArray.push(array[i])
      }
      console.log(hasMap)
  }
  return noDupArray
}





=========================================================================================

//EnQueue and dequeue using twi stack 

var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while(stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}



==============================================================================================


var longestPalindrome = function(s) {
  let currentLongest = [0, 1];

  for (let i=1; i< s.length; i++){
      const odd = expandAroundCenter(s, i-1, i+1); // treating the given letter as a center and checking its surrounding letters 
      console.log("oddddddd:::::",odd)
      const even = expandAroundCenter(s, i-1, i); // checking if the  center is between the given letter and the previous letter
      console.log("evennnnnn:::::",even)
      console.log("print:::::::::::::::::", "odd1======   ",odd[1] + "  oddddd0==== " + odd[0] + "   evennnn1 ===  " + even[1] + " even00000===  " +  even[0])
      const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; // choosing the longest palindrome between odd and even
      currentLongest = currentLongest[1] - currentLongest[0] > longest [1] - longest[0] ?  currentLongest : longest // comparing the longest to the current longest palindrome and updating current longest accordingly
  } 
  console.log("final::::::::",currentLongest)
  return s.slice(currentLongest[0], currentLongest[1]);
};

function expandAroundCenter(s, leftIdx, rightIdx){
  console.log("beforewhile:::::::::::::::::",leftIdx,rightIdx)
  while (leftIdx >= 0 && rightIdx < s.length){
      if(s[leftIdx] !== s[rightIdx]) {
        console.log("ifffff:::::::::::::::::",leftIdx,rightIdx)
        break;}
      leftIdx--;
      rightIdx++;
      console.log("after ----and ++++:::::::::::::::::",leftIdx,rightIdx)
  }
  return[leftIdx + 1, rightIdx] 
}

console.log(longestPalindrome("abcccc"))


// let str = "abcccc"
// console.log(str.slice(2,5))



=================================================================================


<script>

// A O(n^2) time and O(1) space program to
// find the longest palindromic substring
// easy to understand as compared to previous version.

// A utility function to print
// a substring str[low..high]
// This function prints the
// longest palindrome substring (LPS)
// of str[]. It also returns the
// length of the longest palindrome
function longestPalSubstr(str)
{
	let n = str.length; // calculating size of string
	if (n < 2)
		return n; // if string is empty then size will be 0.
				// if n==1 then, answer will be 1(single
				// character will always palindrome)

	let maxLength = 1,start=0;
	let low, high;
	for (let i = 0; i < n; i++) {
		low = i - 1;
		high = i + 1;
		while ( high < n && str[high] == str[i]) //increment 'high'							
			high++;
	
		while ( low >= 0 && str[low] == str[i]) // decrement 'low'			
			low--;
	
		while (low >= 0 && high < n && str[low] == str[high]){
			low--;
			high++;
		}

		let length = high - low - 1;
		if (maxLength < length) {
			maxLength = length;
			start=low+1;
		}
	}
	
	document.write("Longest palindrome substring is: ");
	document.write(str.substring(start,maxLength+start));
	return maxLength;
}

// Driver program to test above functions

let str = "forgeeksskeegfor";
document.write("</br>","Length is: " + longestPalSubstr(str),"</br>");

// This is code is contributed by shinjanpatra

</script>

================================
Access-Control-Allow-Origin
=================================
var obj = {
	a: "hello world",
	b: 42
};

var b = "a";

obj[b];			// "hello world"
obj["b"];		// 42
===================================
git checkout -b feature
====================================
function reverseString(str){
  for(let i = str.length-1 ;i >=0;--i){
    reverseStr = reverseStr +  str[i] 
  }
  return reverseStr
}

=========================
first , second max salary 
key in sql
unique key 
join 



=============================
function checkPalindrome(str){
  let n = str.length
  for(let i =0 ; i < n/2 ; i++){
    if(str[i] !== str[n-1-i]){
      return "string is not palindrome"
    }
    else{
      return "string is palindrome"
    }
  }
}

len-1-i
console.log(checkPalindrome("abcdcba"))

=============================================
let a = -5
let b = 2

function swap(a,b){ 
 a = a - b  
 b = a + b
 a = b - a
 console.log("a" + a, "b "+ b)
 return (a,b) 
}

swap(a,b)