// const filter_list = require('./listFilter') 
//  const friend = require('./completed/friendFoe');
// const validParens = require('./validParens')
// const recreationOne = require('./recreationOne');

// const list = [1,'a','b',0,15];
// const test2 = [1,2,'aasf','1','123',123]
//  const friendInput = ["Ryan", "Kieran", "Jason", "Yous"];
// const tester = "()(()))()";
// const pigIt = require('./pigIt');
// const add = require('./chainAdd');
// const dfSq = require('./dfSq')
// const listSquared = require('./recreationOne');

// const bump = require('./bumps');

const stringer = require('./smith');

it("every first letter to caps.", () => {
    expect(stringer("How can mirrors be real if our eyes aren't real")).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real");

})





// it("returns Wohoo if you complete the trip", () => {
//     expect(bump("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")).toEqual("Car Dead");
// })

// it("given two positive ints, find all integers b/t whose sum of sq divisors are sqs", () => {
//     expect(listSquared(1, 250)).toEqual([ [ 1, 1 ], [ 42, 2500 ], [ 246, 84100 ] ])
// })
// it("difference b/t the sum of sqs and the sq of their sum", () => {
//     expect(dfSq(10)).toEqual(2640);
// })

// it("chains the add function to return total", () => {
//     expect(add(2)(3)(4)).toEqual(9);
// })

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

// it("should return igPay atinlay siay oolcay", () => {
//     expect(pigIt("Pig latin is cool"))
//     .toEqual("igPay atinlay siay oolcay");
    
// })
// it("should return 4", () => {
//     expect(recreationOne(2, 2)).toEqual(4);
// })

// it("should return false" , ()=> {

//     expect(validParens(tester)).toBe(false);
// })




// it('should return names with four letter', () => {

//     expect(friend(friendInput)).toEqual(["Ryan", "Yous"])
// })

// it('returns only numbers', () => {

//     expect(filter_list(list)).toEqual([1,0,15])

// })

// it('also only returns number', () => {
//     expect(filter_list(test2)).toEqual([1,2,123])
// })
