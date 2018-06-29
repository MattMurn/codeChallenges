

fruit = (reels, spins) => {
    let scoring = {
        Wild: 10,
        Star: 9,
        Bell:8,
        Shell: 7,
        Seven: 6,
        Cherry: 5,
        Bar: 4,
        King: 3,
        Queen: 2, 
        Jack: 1
    }
    let one = reels[0][spins[0]]
    let two = reels[1][spins[1]]
    let three = reels[2][spins[2]]
    let compare = [one, two, three]
    // console.log(one, two, three)
    score(one, two, three, compare);
    // console.log(spins.includes(1,1))
    // loop through spin 
}
score = (one, two, three, compare) => {
    // three the same, 
    switch(true){
        case one == two && two == three:
            console.log("three of a kind");
            break;
        case compare.includes('Wild') && one == two || two == three || one == three:
            console.log('Two plus wild')
            break;
        case one == two || two == three || one == three:
            console.log("two of a kind");
            break;
        
        default:
            console.log("0")
    }
    // two the same,
    // two the same and third === wild.
}
spin = [0, 0, 0];
spin2 = [1,1,5];
spin3 = [1,0,1];
spin4 = [5,1,1];
spin5 = [1,6,0];
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];


fruit([reel1, reel1, reel1], spin2);
fruit([reel1, reel1, reel1], spin3);
fruit([reel1, reel1, reel1], spin4);
fruit([reel1, reel1, reel1], spin5);
module.exports = fruit;