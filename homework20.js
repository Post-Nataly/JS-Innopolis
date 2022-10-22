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



// 3

function getNameOfMonth(m) {
    switch (m) {
        case 0:
            alert("Январь");
            break;
        case 1:
            alert("Февраль");
            break;
        case 2:
            alert("Март");
            break;
        case 3:
            alert("Апрель");
            break;
        case 4:
            alert("Май");
            break;
        case 5:
            alert("Июнь");
            break;
        case 6:
            alert("Июль");
            break;
        case 7:
            alert("Август");
            break;
        case 8:
            alert("Сентябрь");
            break;
        case 9:
            alert("Октябрь");
            break;
        case 10:
            alert("Ноябрь");
            break;
        case 11:
            alert("Декабрь");
            break;
        default:
            alert("Нужно число от 0 до 11!");
    }
}

let month = +prompt("Введите число от 0 до 11: ");

if (!month) {
    alert("Нужно ввести число!");
} else {
    getNameOfMonth(month);
}

for (let index = 0; index < 12; index++) {
    if (index = 1) console.log("Январь");
    if (index = 2) console.log("Февраль");
    if (index = 3) console.log("Март");
    if (index = 4) console.log("Апрель");
    if (index = 5) console.log("Май");
    if (index = 6) console.log("Июнь");
    if (index = 7) console.log("Июль");
    if (index = 8) console.log("Август");
    if (index = 9) console.log("Сентябрь");
    if (index = 11) console.log("Ноябрь");
    if (index = 12) console.log("Декабрь");
}