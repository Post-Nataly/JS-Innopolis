// 1

let a = '$100';
let b = '300$';

let sum = (parseInt(a.slice(1)) + parseInt(b.slice(0,3)));

console.log(sum);

// 2

let message = ' привет, медвед      ';

message = message.trim();

console.log(message[0].toUpperCase() + message.slice(1));

// 3

let age = prompt("Сколько Вам лет?");

switch (age) {
    case 2:
        alert(`Вы младенец и вам {age} лет`);
        break;

    default:
        break;
}