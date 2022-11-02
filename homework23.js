'use strict'

// 1

let n = prompt("Введите число для обратного отсчёта: ");
let interval = setInterval(() => {
    if (Number(n)) {
        n = n - 1;
        console.log(`Осталось: ${n}`);
        if (n === 0) {
            clearInterval(interval);
            console.log("Время вышло!");
        }
    } else {
        console.log("Вы ввели не число!");
        clearInterval(interval);
    }
}, 1000);