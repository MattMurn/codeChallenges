function removeRotten(bagOfFruits){
    if(!bagOfFruits) { return []; }
    
    return bagOfFruits.map(fruit => {
      return fruit.replace("rotten", "").toLowerCase();
    });
  }
  removeRotten(["rottenBanana", "apple", "kiwi", "qaii"])
  removeRotten([])