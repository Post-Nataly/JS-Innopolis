// 1

let a = '100px';
let b = '323px';

console.log(parseInt(a) + parseInt(b));


// 2

let numbers = Math.max(10, -45, 102, 36, 12, 0, -1);

console.log(numbers);


// 3

let c = 123.3399;

console.log(Math.round(c));


let d = 0.111;

console.log(d.toFixed(1));


let e = 45.333333;

console.log(e.toFixed(1));


let f = 3;

console.log(f**5);


let g = 400000000000000;

console.log(4e14);


let h = '1';

console.log(parseInt(h) === 1);


// 4

console.log((0.1 + 0.2) === 0.3); 

// Число хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей.
// Дроби в двоичной форме являются бесконечной дробью.
// В JavaScript нет возможности для хранения точных значений 0.1 или 0.2, используя двоичную систему.
// Числовой формат IEEE-754 решает эту проблему путём округления до ближайшего возможного числа. 
