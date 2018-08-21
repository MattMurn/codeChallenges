function inAscOrder(arr) {
    // let nat = arr;
    // arr.sort((a,b) => a -b);
    let answer = true;
    // console.log(nat)
    arr.forEach((element, i) => {
        // (element === sorted[i]) ? answer = true : answer = false;
        if(arr[i] > arr[i+ 1]){
            answer = false;
        }
    })

    console.log(answer);
  }

  inAscOrder([3,4,5,2,1])