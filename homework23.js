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



// 2

let promise = fetch("https://reqres.in/api/users");

promise
    .then((response) => {
        return response.json();
    })

    .then((response) => {
        console.log(`Получили пользователей: ${response.data.length}`);
        response.data.forEach(function (user) {
            console.log(`- ${user.first_name} ${user.last_name} (${user.email})`);
        })
    })