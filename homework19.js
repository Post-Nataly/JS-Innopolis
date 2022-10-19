// 1

let a = '$100';
let b = '300$';

let sum = (parseInt(a.slice(1)) + parseInt(b.slice(0, 3)));

console.log(sum);



// 2

let message = ' привет, медвед      ';

message = message.trim();

console.log(message[0].toUpperCase() + message.slice(1));



// 3

let age = prompt("Сколько Вам лет?");

if (age > 0 && age <= 3){
    alert(`Вам ${age} лет и вы младенец`)
}
else if (age >= 4 && age <= 11){
    alert(`Вам ${age} лет и вы ребенок`)
}
else if (age >= 12 && age <= 18){
    alert(`Вам ${age} лет и вы подросток`)
}
else if (age >= 19 && age <= 40){
    alert(`Вам ${age} лет и вы познаёте жизнь`)
}
else if (age >= 41 && age <= 80){
    alert(`Вам ${age} лет и вы познали жизнь`)
}
else if (age >= 81){
    alert(`Вам ${age} лет и вы долгожитель`)
}
else {
    alert("Так не бывает")
}



// 4

let messsage = 'Я работаю со строками как профессионал!';

let count = (messsage.match(/\ /g) || []).length;

console.log(count + 1);