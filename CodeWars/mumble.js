accum = s => {
    
   
    const merged = s.split('').map(element => {
        return element.toUpperCase() + (element * (s.indexOf(element))) 
    }).join('-');
    console.log(merged)
}

module.exports = accum;

accum("sdfskdj");