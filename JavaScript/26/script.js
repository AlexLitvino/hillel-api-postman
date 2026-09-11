"use strict"

/**
 Умовні конструкції
 У JavaScript є кілька умовних конструкцій, які дозволяють вам виконувати код в залежності від певних умов.
 Основні умовні конструкції включають if, else if, else та switch.
 */

//Найпростіший випадок
/*
var age = 22;
 if(age > 18) console.log("Є доступ!");
*/

//if(true) console.log("Hi bool");

//if ('text') console.log("Hi text");

//if("") console.log("Null"); // ??


// Ще раз NaN, 0, null, undefined, '' це false. Все інше true

//Якщо одним рядком не обійдешся
/*var age = 22;
if (age > 18) {
    age += 10;
    console.log("Тепер мені " + age);
}*/

//можливі варіанти
/*let salary = 1000;
if (salary < 1000) {
    console.log("Маленька ЗП")
} else {
    console.log("Вже краще")
}*/

//Повна форма запису
/*let salary = 1000;
if (salary < 1000){
    console.log("Маленька ЗП")
} else if (salary === 1000){
    console.log("Вже краще")
} else {
    console.log("Супер")
}*/

// Терарний оператор
/*let birthday = 25;
let discount = (birthday === 25) ? "30%" : "10%";
console.log(discount);*/

// Як би це виглядало через if. У випадках коли умов мало, та ми одразу хочемо присвоїти чомусь значення,
// краще використати тернарний оператор.
/*let birthday = 25;
let discount;
if (birthday === 25){
    discount = "30%"
} else {
    discount = "10%"
}*/

// І ніхто нам не забороняє робити все разом.
/*let sex = 'male';
let birthday = 25;
let discount;
if (sex === 'male'){
    discount = (birthday === 25) ? "30%" : "10%";
} else if (sex === 'female'){
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
}*/

// перебір варіантів: switch
/*
var a = 8;
switch (a) {
    case 1:
        console.log('варіант 1');
        break;
    case 2:
        console.log('варіант 2');
        break;
    case 3:
        console.log('варіант 3');
        break;
    case 4:
        console.log('варіант 4');
        break;
    case 5:
        console.log('варіант 5');
        break;
    default:
        console.log('Що ???');
}
*/


//Прибираємо break - групуємо варіанти
/*
var a = 3;
switch (a) {
    case 1:
        console.log('варіант 1');
        break;
    case 2:
        console.log('варіант 2');
    case 3:
        console.log('варіант 3');
    case 4:
        console.log('варіант 4');
    case 5:
        console.log('варіант 5');
        break;
    default:
        console.log('Що ???');
}
*/


//switch при порівнянні використовує === і це важливо!
/*var num = '1';
//var num = 1;
switch (num) {
    case 1:
        console.log(1)
        break
    case '1':
        console.log('\'1\''); // Дуже цікаво, а що це за знак \
        break;
    case 2:
        console.log(' два');
        break;
    case 3:
        console.log(' три');
        break;
    default:
        console.log('Що ???');
}*/



