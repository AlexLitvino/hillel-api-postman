"use strict";

/**
 Масиви
 У JavaScript масив (Array) є структурою даних, яка дозволяє зберігати колекцію елементів в одній змінній.
 Масиви в JavaScript можуть містити елементи будь-якого типу даних, такі як числа, рядки, об'єкти, функції та інше.
 Кожен елемент у масиві має унікальний індекс, що дозволяє доступатися до нього та взаємодіяти з ним.
 */

// Оголошення масиву
//let a = [];

//Масив у JS дуже невибагливий, туди можна наштовхати чого завгодно
/*let arr = [10, "John", true];
console.log(arr);*/

// Додавання значень
//let arr = ['Oleg', 'Olga', 'Mikola'];
/*arr[3] = 'Koly';
console.log(arr)*/

// Тепер змінимо якесь значення
/*arr[0] = 'Olena';
console.log(arr)*/

// Навіть видалити можна значення, але так не бажано!
//Оператор delete видалить елемент масиву, але залишить його індекс з властивістю undefined.
/*delete arr[0];
console.log(arr)
console.log(arr[0])*/


// Як зрозуміти, що перед вами масив?
/*let arr = ["один", "два", "три"];
console.log(typeof arr);

let notArr = {
    0: "Один",
    1: "Другой",
    2: "Третий",
    length: 3
}
console.log(typeof notArr);*/
// Метод Array.isArray() - використовується для перевірки, чи об'єкт є масивом.
// Він повертає true, якщо об'єкт є масивом, і false у протилежному випадку.
/*
console.log(Array.isArray(arr));
console.log(Array.isArray(notArr));
*/

//Перебір масиву
/*var arr = ["перший", "другий", "ще один"];
//Робимо масив з "діркою", а краще казати розрідженим
arr[5] = "багато";*/
/*for (let i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "]=" + arr[i]);
}*/

// Якщо спробувати for in
/*var arr = ["перший", "другий", "ще один"];
arr[11] = "багато";
arr.someNew = '12345er'; // Можемо зробити наш масив трохи асоціативним*/
/*for (let i in arr) {
    console.log("arr[" + i + "] = " + arr[i]);
}
//Але чому дорівнює довжина такого масиву?
console.log("length of arr = " + arr.length);*/

// Як буде виглядати вивід саме через класичний for!
/*
for (let i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "]=" + arr[i]);
}
*/


//Перебір масиву
/*var arr = ["перший", "другий", "ще один"];
//Робимо масив з "діркою", а краще казати розрідженим
arr[5] = "багато";*/
/*for (let i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "]=" + arr[i]);
}*/

// Якщо спробувати for in
// var arr = ["перший", "другий", "ще один"];
// arr[11] = "багато";

/*for (let i in arr) {
    console.log("arr[" + i + "] = " + arr[i]);
}*/
//Але чому дорівнює довжина такого масиву?
//console.log("length of arr = " + arr.length);

// Як буде виглядати вивід саме через класичний for!
/*
for (let i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "]=" + arr[i]);
}
*/

// Методи масиву
//Перетворення масиву на рядок
/*let arr = [1, 2, 3, 4, 5];
console.log('toString() : ' + arr.toString());
console.log('join без параметрів : ' + arr.join());	// склеює масив у рядок
console.log('join з параметром : ' + arr.join('++'));*/// можна вказати роздільник



//І до речі, відчуйте різницю:
/*let arr = [1, 2, 3, 4, 5];
console.log('Звичайний вивід масиву: ');
console.log(arr);
console.log('Масив покажись: ' + arr)*/

//Дія зворотна join - split
/*let str = "Був рядок із пробілами. Став масив слів";
let arr = str.split(' '); //Вказуємо символ, яким будемо " розбивати "
console.log(arr);*/

//Склеювання масивів
/*let a = [1, 2];
let b = [3, 4];
let res = a.concat(b); //Просто склеюємо два масиви
console.log(res);*/


// У метод concat можна передати багато параметрів, і навіть не обов'язково - масивів
/*let a = [1, 2];
let b = [3, 4];
let res = a.concat("five", true, b); // Вихідні масиви не змінилися, поверне НОВИЙ масив
console.log(res);*/



//indexOf()/lastIndexOf() - Працює і у масиві!
/*let arr = ['Oleg', 'Olga', 'Mikola','Vadim'];
console.log(arr.indexOf('Olga'));
console.log(arr.lastIndexOf('Vadim'));*/

//вирізаємо "шматочок" масиву
/*let arr = [1, 3, 7, 5, 8, 9];
//let newArray = arr.slice(3);// З третього – і до кінця
//let newArray = arr.slice(2, 5); // з другого по п'ятий
//let newArray = arr.slice(3, 1);//порожній масив
//let newArray = arr.slice(-4, -1);//відраховує з кінця
//let newArray = arr.slice(); // Поверне весь масив. Тобто фактично клонує його!
console.log('arr=' + arr); // Початковий масив залишився незмінним
console.log('x=' + newArray);*/

// Задом на перед - все навпаки!
/*let arr=[1, 3, 7, 5, 8, 9];
arr.reverse(); //Змінює сам масив!
console.log(arr)*/

//Епічна тема: сортування масиву
/*let arr = [16, 2, 7, 9, 34, 3];
console.log("before sort: " + arr);
arr.sort();
console.log("after default sort: " + arr);*/

/*
За замовчуванням sort() сортує елементи у лексикографічному порядку, що означає, що рядки сортуються за їхніми кодами Unicode,
а числа сортуються як рядки.
Проте, ви можете використовувати власну функцію порівняння для визначення кастомного порядку сортування.
*/
/*let arr = [16, 2, 7, 9, 34, 3];
arr.sort(myCompare);
console.log("after my sort: " + arr);

function myCompare(a, b) {
    return a - b
}*/

// А можна навіть так
/*let arr = [16, 2, 7, 9, 34, 3];
arr.sort(function (a, b) {
    return b - a
});
console.log("after my sort: " + arr); // в змінному порядку*/


// Як воно буде працювати зі строками ?
/*const fruits = ['banana', 'apple', 'date', 'cherry'];
fruits.sort();
console.log(fruits);*/

// Маніпуляції з масивом
//pop, push
//pop - "виштовхування" верхнього (останнього) члена масиву
/*let arr = ['abc', 24, 'def', 14];
console.log('Початковий arr=' + arr);
let v = arr.pop(); //те, що "виштовхнули"
console.log('v=' + v + '\narr=' + arr);*/

// push - "заштовхування" нового елемента в "хвіст" масиву
/*let arr = ['abc', 24, 'def', 14];
console.log('Початковий arr=' + arr);
let v = arr.push(11, 12, 13); //Повертає довжину масиву
console.log('v=' + v + '\narr=' + arr);*/

//зсув масиву - вліво, "втрачаючи" перший елемент
/*let arr = ['abc', 24, 'def', 14];
console.log('Початковий arr=' + arr);
let v = arr.shift(); //"втрачений" елемент
console.log('v=' + v + '\narr=' + arr);*/

//зсув масиву - праворуч, додаючи елементи
/*let arr = ['abc', 24, 'def', 14];
console.log('Початковий arr=' + arr);
let v = arr.unshift(1, 2); //Повертає довжину масиву
console.log('v=' + v + '\narr=' + arr);*/

// Метод splice, не плутати з slice. Використовується для зміни вмісту масиву, включаючи вставку, видалення та заміну елементів.
//Вирізати шматочок із середини масиву
/*
let arr = [1, 2, 3, 4, 5];
console.log('Початковий arr=' + arr);
let newArr = arr.splice(1, 2);
console.log('newArr=' + newArr + '\narr=' + arr);
*/

//вставити шматочок у середину
/*let arr = [1, 2, 3, 4, 5];
console.log('Початковий arr=' + arr);
let res = arr.splice(2, 0, 'a', 'b');
console.log('res=' + res + '\narr=' + arr);*/

//Можна і вирізати та вставити
/*let arr = [1, 2, 3, 4, 5];
console.log('Початковий arr=' + arr);
let res = arr.splice(1, 2, 'a', 'b');
console.log('res=' + res + '\narr=' + arr);*/

//Виконуємо щось для кожного члена масиву. І ще один for!
/*let arr = [2, 4, 6, 8];
arr.forEach(function (v) {
    console.log(v * 10)
});
console.log(arr);*/

// Можна знов зустріти такий вигляд
/*var arr = [2, 4, 6, 8];
arr[7] = 111;
arr.forEach((v) => {
    console.log(v * 10)
});
console.log(arr);*/

// Звісно можна використовувати старий добрий спосіб. Але не забуваємо що виводимо повністю все!
/*
let arr = [2, 4, 6, 8];
arr[7] = 111;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 10);
}
console.log(arr);
*/

//map - створює новий масив, не трансформуючи вихідний
/*var arr = [2, 4, 6, 8];
var res = arr.map(function (v) {
    return v * 10;
});
console.log(arr);
console.log(res);*/

//Повний перелік аргументів:
/*var arr = [2, 4, 6, 8];
var res = arr.map(function (item, i, arr) {
   // console.log(arr); // Початковий масив!
  //  console.log(i); // ітерація
    return '' + i + ': ' + (item * 10);
});
console.log("arr=" + arr);
console.log("res=" + res);*/

//Фільтрація масиву
/*var arr = [2, 8, 4, 12, 34, 3, 51];
var res = arr.filter(checker);
console.log("arr=" + arr);
console.log("res=" + res);

function checker(item) {
    return item > 8;
}*/

//Перевірка масиву every/ some
/*var arr = [1, 2, 3, -4, 4, 5, 6];
console.log("arr= " + arr);

console.log("Is EVERY positive? " +  arr.every(checker));
console.log("is SOME positive? " + arr.some(checker));


function checker(item) {
    return item > 0;
}*/

//reduce - "згортання" масиву, обчислення із збереженням проміжного результату
//callback(previousValue, currentItem, index, arr):
/*var arr = [1, 2, 3, 4, 5];
//var res = arr.reduce(myAction);
//var res = arr.reduce(myAction, 12); // "стартове" значення
//var res = arr.reduce(myAction, 0);
//var res = arr.reduceRight(myAction, 0);

console.log('+++++++++++++\nresult: ' + res);

// Сума масиву
function myAction(accumulator, currentValue, index, array) {
    console.log('-----\n' + 'now in accumulator: ' + accumulator);
    console.log('arr[' + index + ']=' + currentValue);
    return accumulator + currentValue;
}*/

// Ще приклад сума масиву тільки для непарних чисел, як приклад
/*var arr = [1, 2, 3, 4, 5];
var res = arr.reduce(myAction);
function myAction(accumulator, currentValue, index, array) {
    console.log('-----\n' + 'now in accumulator: ' + accumulator);
    console.log('arr[' + index + ']=' + currentValue);
    accumulator = (currentValue % 2 !== 0) ? accumulator + currentValue: accumulator;
    return accumulator;
}
console.log(res);*/

//Ще одна цікава штука про масиви
/*function sum(a, b) {
    return a + b
}

console.log(sum(2,3)); // ??? Все доволі нам відоме*/

// Але якщо мені все ж прилетіло більше значень, чи можу я про них дізнатись ?
/*function sum(a, b) {
    let arg = arguments;
    console.log('об\'єкт arguments: ',arg);
    console.log('перший елемент : ',arg[0]);
    console.log('isArray: ',Array.isArray(arg));
    return a + b;
}

console.log(sum(2,4,6))*/

// Ще про один метод об'єкту Array, Array.from
/*function sum(a, b) {
    let arg = Array.from(arguments); // !!!
    console.log('об\'єкт arguments: ',arg);
    console.log('перший елемент : ',arg[0]);
    console.log('isArray: ',Array.isArray(arg));
    return a + b;
}

console.log(sum(2,4,6));*/

// Ще приклад роботи Array.from
/*const str = 'hello';
const charArray = Array.from(str);

console.log(charArray);*/

// Ну вже звичне для нас, можна використовувати другий аргумент - функцію, яка буде застосована до кожного елемента
/*
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = Array.from(numbers, function (n){
    return n * 2;
});

console.log(doubledNumbers);
*/