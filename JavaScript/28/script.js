"use strict"
/**
 Functions
 Функції - це блоки коду, які можна викликати з будь-якого місця у програмі.
 Вони дозволяють згрупувати певний фрагмент коду і використовувати його в багатьох місцях
 без необхідності повторювати сам код.
 У JavaScript є кілька способів визначення функцій:
 - Function Declaration
 - Function Expression
 - Arrow Functions
 */

// Класичний випадок - Function Declaration
/*function test() {   //Оголошення функції
    console.log("Привіт із функії!");  //Тіло функції
}

console.log("Зараз викличемо функцію");
test(); // виклик функції
console.log("І ще раз викличемо функцію");
test(); // виклик функції*/


//Як і зі змінною, оголошення функції "спливає"
/*test();
function test(){
	console.log("Привіт із функції!");
}*/

//Додамо щось цікавіше ніж console.log. Давайте розрахуэмо площу квадрату
/*function squareAreaCalculation() {
    let a = 2;
    console.log(a * a);
}
squareAreaCalculation();*/

//Функція – спосіб створити локальну область видимості
/*var ext = "Зовнішня змінна";

function test() {
    var inner = "Тільки для внутрішнього користування";
    console.log('Бачу: ext=' + ext);
    console.log('Бачу: inner=' + inner);
}
test();*/
/*console.log('А тепер – зовні:')
console.log('Бачу: ext='+ext);
console.log('Бачу: inner='+inner);*/

//Своя сорочка ближче до тіла (народна мудрість)
/*var ext = "Зовнішня змінна";

function test() {
    var ext = "Внутрішня змінна";
    console.log('Змінна ext=' + ext);
}

test();
console.log('Змінна ext=' + ext);*/

//Усередині функції змінні "спливають" точно так, як і в основному скрипті
/*function test() {
    console.log('Спочатку myVar дорівнювала ' + myVar);
    myVar = "Я маю значення!";
    console.log('потім myVar=' + myVar);
    var myVar;
}

test();*/


// Function Expression
/*let squareArea = function () {
    let a = prompt("Ввести сторону квадрату");
    console.log(a * a);
}
squareArea();*/

// А в чому тоді різниця
/*printGreeting(); // І в нас ніяких проблем;
function printGreeting() {
    console.log("Hello world")
}*/

// А що ми тут отримаємо ?
/*printGreeting()
let printGreeting = function () {
    console.log("Hello world")
}*/

// А якщо так ?
/*
printGreeting();
var printGreeting = function () {
    console.log("Hello world")
}*/

// Function Expression корисно використовувати коли ми хочемо в змінній зберігати різні функції
/*let autoBrand = "ТАВРІЯ";
let accelerateСar;
switch (autoBrand) {
    case "Audi":
        accelerateСar = function () {
            let audiSpeedIndex = 100;
            console.log("Розганяємо авто до 150км: " + audiSpeedIndex * 1.5);
        }
        break;
    case "ТАВРІЯ":
        accelerateСar = function () {
            let audiSpeedIndex = 0;
            console.log("Розганяємо авто до 150км")
            for (let i = 0; i < 60; i += 10) {
                audiSpeedIndex += i;
                console.log(audiSpeedIndex);
            }
        }
        break;
}

accelerateСar();*/

// Це все чудово, але є певні загальні рекомендації що і як повинна містити функція.
/*function squareAreaCalculation() {
    let a = prompt("Ввести сторону квадрату"); // Нечиста функція через побічний ефект
    let result = a * a;
    console.log(result);  // Нечиста функція через побічний ефект
}*/

// Тепер трохи краще, але...
/*let a = prompt("Ввести сторону квадрату");

function squareAreaCalculation() {
    let result = a * a;
}

console.log(result); // Але ми тут не бачимо нашу змінну. */

// Поняття return
// Розглянемо що повертає функція за замовчуванням
/*let a = 5;
function squareAreaCalculation() {
    let result = a * a;
}
console.log(squareAreaCalculation())*/

/*let a = 5;

function squareAreaCalculation() {
    let result = a * a; // Але все одно погано що ми маємо залежність через використання зовнішньої змінної:
    return result;
}

let result = squareAreaCalculation();
console.log(result);*/

//return - це безумовний вихід із функції
/*let a = 5;

function squareAreaCalculation() {
    let result = a * a; // Але все одно погано що ми маємо залежність через використання зовнішньої змінної:
    return result;
    console.log("After return");
}

let result = squareAreaCalculation();
console.log(result);*/

// Передача значень у функцію
/*let a = 5;

function squareAreaCalculation(side) {
    return side * side;
}

let result = squareAreaCalculation(a);
console.log(result);*/

// А що буде якщо я не передам нічого
/*let a = 5;

function squareAreaCalculation(side) {
    console.log(side);
    return side * side;
}

let result = squareAreaCalculation();
console.log(result);*/

// Параметрів можна вказувати скільки завгодно
/*function hello(name, surname, age){
    console.log("Hello " + name + " " + surname + ", your age is " + age);
}
hello('Dmitro', 'Tuchina', 12 );*/

//А можна якось встановити параметри за замовчуванням, або що робити якщо нам нічого не передали
/*function hello(name= 'default') {
    return   'Hello ' + name;
}
console.log(hello());
console.log(hello('Volodimir'));*/

// Круто!!! А можу я щось передавати окрім значень! Так - callback function!
//Функція розганяє нашу автівку
/*function accelerateCar(callback, maxSpeed) {
    let carSpeed = 0;
    while (carSpeed <= maxSpeed){
        callback(carSpeed++);
    }
}
accelerateCar(console.log, 200);*/

// Arrow functions
/*const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); */

// Теж саме що і
/*function multiply(a,b){
    return a *b;
}*/

//Якщо аргументів немає, то дужки порожні, але вони повинні бути:
/*let sayHi = () => console.log('Hello');
sayHi();*/

//Що у нас по підняттю
/*sayHi();
let sayHi = () => console.log('Hello');*/


// фігурна дужка починає блок багаторядкової функції
/*
let sum = (a, b) => {
    const result = a + b;
    return result; // якщо використовуємо фігурні дужки, то щоб повернути результат, потрібно додати "return"
};

console.log(sum(1, 2));*/
