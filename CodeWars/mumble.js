accum = s => {
   let count = -1;
    return s.split('').map(element => {
        count ++;
        return element.toUpperCase() + element.repeat(count) 
    }).join('-');
}

module.exports = accum;

