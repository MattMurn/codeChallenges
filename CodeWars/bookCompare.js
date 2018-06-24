    stockList = (listOfArt, listOfCat) => {
    //1 get object to hold values
        let count = 0;
        let lessDash = 0;
        let finalObj = {};
        compare = (finalObj, article, listOfCat) => {
            listOfCat.forEach(categoryEl => {
                if(article[0] === categoryEl && article.split(' ')[1] > 0){
                    finalObj[categoryEl] += parseInt(article.split(' ')[1]);
                } 
            })
        }
        listOfCat.forEach(objProp => finalObj[objProp] = 0);
        listOfArt.forEach(article => {
            compare(finalObj, article, listOfCat);
        })
        let statement = []; 
        
        for(let prop in finalObj){
            lessDash ++;
            statement.push(`(${prop} : ${finalObj[prop]})`, '-');
            // statement.push('-')
            if(finalObj[prop] === 0){
                count ++;
            }
        }

        statement.splice(statement.length -1, 1);
        // console.log(count,"less Dash Count -", lessDash, "statement length -", statement.length)
        if(count === (statement.length-(lessDash-1))){
            statement = ''
            // console.log(statement);
            return statement;
        }else {
            // console.log(statement.join(' '));
            return statement.join(' ');
        }

    }
    b = ["ABAR 0", "CDXE 0", "BKWR 0", "BTSQ 0", "DRTY 0"]
    c = ["R", "X", "S", "K"]
stockList(b, c) 

module.exports = stockList;