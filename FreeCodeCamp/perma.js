function permAlone(str) {
    
    let i, splitWord = str.split('');
    for(i = 0; i <= splitWord.length -1; i++){
        console.log(splitWord[i])
    }
    return str;
  }
// var permArr = [],
//   usedChars = [];

// function permute(input) {
//     let ch = input.split('');
//     // console.log(ch)
// //     let i;
//   for (i = 0; i < ch.length; i++) {
      
//     ch.splice(i, 1)[0];
//     usedChars.push(ch);
//     if (input.length == 0) {
//       permArr.push(usedChars.slice());
//     }
//     permute(input);
//     input.splice(i, 0, ch);
//     usedChars.pop();
//   }
//    console.log(permArr);
// };
  /*
  find all the permutations that don't have back to back letters.
  1. find all permutations
  2. create a function that goes through each and increments if 
   double letter permutation is passed.
*/

  permAlone('aab');