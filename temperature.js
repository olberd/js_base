"use strict";
var Tf;
var Tc = +prompt('Введите температуру по Цельсию ')
Tf = (9 / 5) * Tc + 32;
alert(Tf);

//
var admin;
var name = "Василий"; 
admin = name;
alert(`Name admin is ${admin}`);

// 1000 + "108" = 1000108 сложение числа с текстом дает текст

var res;
res = 10 + 10 + "10"; 
console.log(res); // 2010
// 10+10 = 20, 20 число при сложеним с текстом "10" = конкантенация 

res = 10 + "10" + 10; // 101010
console.log(res);
// 10 + "10" конкантенация, "1010" + число 10 так же

res = 10 + 10 + +"10"; // 30
console.log(res);
//унарный оператор + перед "10" переводит текст в число

res = 10 / -"" ;
console.log(res); // -Infinity
// минус переводит пустую строку в -0, деление на -0 дает -бесконечность


res = 10 / +"2,5"; 
console.log(res); // NaN
// + переводит текст "2,5" в число с плавающей запятой, но это ошибка в js тип float через точку. 

/*
let mode = "normal"; // правильно

let my_valu3 = 102; // правильно, лучше так myValu3

let 3my_value3 = "102"; // не правильно, начинается на цифру

let __hello__ = "world"; // правильно

let $$$ = "money"; // правильно

let !0_world = true; // не правильно, начинается с символа, разрешены только "$" и "_"
*/