// const EventEmitter = require('events').EventEmitter;
// const util = require('util');
// let Person = function(name) {
//     this.name = name;
// }

// util.inherits(Person, EventEmitter);
var Person = require('./lib')
let ben = new Person("Ben Franklin");
let george = new Person("George Paul");

george.on('speak', function(said){
    console.log(`${this.name} spoke ${said}`)

});

ben.on('speak', function(said) {
    console.log(`${this.name} spoke ${said}`)

})

ben.emit('speak','you may delay but time will not');
george.emit('speak','Imma go across that cold river...probably');

// const readline = require('readline');

// let rl = readline.createInterface(process.stdin, process.stdout);
// let realPerson = {
//     name: "",
//     sayings: []
// };
// rl.question("what is the name of a real person", answer => {
//     realPerson.name = answer;
//     rl.setPrompt(`what would ${realPerson.name} say?`)
//     rl.prompt();
//     rl.on('line', saying => {
//         realPerson.sayings.push(saying);
//         rl.setPrompt(``)
//         console.log(saying);
//     })


// })
// var path = require('path');
// const util = require('util');

// var Mpath =path.basename(__filename);
// util.log(Mpath);

// // process.on('exit', data => {
// //     // process.stdout.write(">>>>>>>>>>>>>>>>>")
// //     process.stdout.write(answers)

// // })


// var wait = 3000;
// var cur = 0;
// var waitInterval = 500;
// var waitpercent = 0;

// writeWaiting = waitpercent => {
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`wainting ... ${waitpercent}`)
// }
// let invert = setInterval(() => {
//     cur += waitInterval;
//     waitpercent = Math.floor((cur/waitInterval)*100)
//     writeWaiting(waitpercent);

//     console.log(`waiting ${cur/1000} .... secondss`);
// })


// setTimeout(() => {
//     console.log("YOU WAITED!!!")
//     clearInterval(invert);
//     writeWaiting(100)
// }, wait)


// writeWaiting(0)

async () => {
    try {
        await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
      } catch (error) {
        // Error saving data
      }
}