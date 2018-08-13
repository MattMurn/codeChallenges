function removeRotten(bagOfFruits){
    if(!bagOfFruits) { return []; }
    return bagOfFruits.map(fruit => {
      return console.log(fruit.replace("rotten", "").toLowerCase());
    });
  }
  removeRotten(["rottenBanana", "apple", "kiwi", "qaii"])
  // removeRotten([])


  function Factory (name, number=0, age=0) {
    this.name = name, 
    this.number = number,
    this.age = age

    this.printInfo = () => {
      console.log(` name :${this.name} number: ${this.number} age: ${age}`)
    }
  }

const Matt = new Factory("Matt", 31278, 33);

Matt.printInfo();

Factory.prototype.hello = hello => {
  console.log(`This is a factory function for saying ${hello}`)
}

Matt.hello("Goodbye")
Matt.hello(`Hello again this is ${Matt.name}`)