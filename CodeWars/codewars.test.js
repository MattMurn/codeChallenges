// const filter_list = require('./listFilter') 
//  const friend = require('./completed/friendFoe');
// const validParens = require('./validParens')
// const recreationOne = require('./recreationOne');

// const list = [1,'a','b',0,15];
// const test2 = [1,2,'aasf','1','123',123]
//  const friendInput = ["Ryan", "Kieran", "Jason", "Yous"];
// const tester = "()(()))()";
const pigIt = require('./pigIt');

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

it("should return igPay atinlay siay oolcay", () => {
    expect(pigIt("Pig latin is cool"))
    .toEqual("igPay atinlay siay oolcay");
    
})
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
