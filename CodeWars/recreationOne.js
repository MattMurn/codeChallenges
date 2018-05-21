/* Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
 The sum of the squared divisors is 2500 which is 50 * 50, a square! Given two integers m, n (1 <= m <= n)
  we want to find all integers between m and n whose sum of squared divisors 
 is itself a square. 42 is such a number. The result will be an array of arrays or of tuples 
 (in C an array of Pair) or a string, each subarray having two elements, first the number whose 
 squared divisors is a square and then the sum of the squared divisors.
*/

function listSquared(m, n) {
    let holder = [];
    let divisors = [];
    let final = [];
    // let counter = m;
    for(let m; m < n; m++){    
        for( let i = 1; i <= m; i++){
            if(Number.isInteger(m/i)){
                holder.push(i*i);
            }        
        }

        let reducer = holder.reduce((first, second) => {
        return first + second;
        },0);

        let sqr = Math.sqrt(reducer);
        // let sqLen = sqr.toString().split("").length;
        
        if(Number.isInteger(sqr)){
            console.log([k,sqr])
        }
        // console.log(reducer);
        final.push( reducer);
        console.log(final);
        // console.log(sqLen);
    }
}

listSquared(1, 250);


// listSquared(2, 5);

module.exports = listSquared;