// 1

let i = 0;

while (i <= 20) {
    console.log(i);
    i += 2;
}



// 2

let sum = 0;

for (let count = 0; count < 3; count++) {

    let num = +prompt("Введите число:");

    if (!num) {
        alert("Ошибка, Вы ввели не число!");
    }
    else {
        sum += num;
    }
}

alert("Сумма введённых чисел: " + sum);
