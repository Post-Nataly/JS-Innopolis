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

let arr1 = ["f", 15, "abc", 6, "k", 2];

alert(getSumm(arr1));



// 3

let cart = [4884];

function addToCart(arr) {
    let newarr = [];
    for (let index = 0; index < arr.length; index++) {
        if (!newarr.includes(arr[index])) {
            newarr.push(arr[index]);
        }
        else {
            continue;
        }
    }
    return newarr;
}

cart.push(3456);

cart.push(3456);

console.log(addToCart(cart));

function removeFromCart(arr, value) {
    let newarr= [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] !== value && !newarr.includes(arr[index])) {
            newarr.push(arr[index]);
        } else {
            continue;
        }
    }
    return newarr;
}

console.log(removeFromCart(cart, 4884));