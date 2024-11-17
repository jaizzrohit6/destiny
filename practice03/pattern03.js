// Let there is a character set - 'a', 'b', 'c', 'd'. How many unique words can be formed using the character set (print them) and just to keep in mind no character should repeat in the word. The example should come up like abcd, cbad etc.
// Catches - 1. All words should be unique, The length of word should match the array length, there should not be duplication of characters in any formulated words.

//interview question

// Function to generate all permutations of a character set
function generatePermutations(chars) {
    const results = [];
  
    function permute(arr, memo = []) {
      if (arr.length === 0) {
        results.push(memo.join(""));
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        const current = arr.slice();
        const next = current.splice(i, 1);
        permute(current, memo.concat(next));
      }
    }
  
    permute(chars);
    return results;
  }
  
  // Define the character set
  const charSet = ['a', 'b', 'c', 'd'];
  
  // Generate all unique permutations
  const uniqueWords = generatePermutations(charSet);
  
  // Print the unique words
  console.log("Unique words:");
  uniqueWords.forEach(word => console.log(word));
  
  // Print the total number of unique words
  console.log("\nTotal number of unique words:", uniqueWords.length);
  