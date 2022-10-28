'use strict'

// 1

function getSumm(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (Number(arr[index])) {
            sum += arr[index];            
        } else {
            continue;
        }
    }
    return sum;
}

let arr1 = ["f", 5, "abc", 6, "k", 2];

alert(getSumm(arr1));



// 3